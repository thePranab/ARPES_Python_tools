#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: To load ARPES data from SES text output file.
Version: 20240524
@author: Pranab Das (GitHub: @pranabdas)
[data, energy, angle] = load_arpes_text_data("example_spectrum.txt")
"""

import re
import urllib.request
import numpy as np

REGEX_DICT = {"num_int": r"[+-]?\d+"}
REGEX_DICT.update({"num_dbl": r"[-+]?\d*\.\d+(?:[eE][-+]?\d+)?"})
REGEX_DICT.update({"energy_len": (r"^\s*Dimension\s+1\s+size\s*=\s*{0}").format(REGEX_DICT["num_int"])})
REGEX_DICT.update({"angle_len": (r"^\s*Dimension\s+2\s+size\s*=\s*{0}").format(REGEX_DICT["num_int"])})
REGEX_DICT.update({"angle_data": r"^\s*Dimension\s+2\s+scale\s*="})


def load_ses_spectra(filename):
    """
    Reads SES 2D spectra from file.
    """

    if (filename[:7] == "http://") or (filename[:8] == "https://"):
        web = True
    else:
        web = False

    if web:
        try:
            headers = {"User-Agent": "Mozilla/5.0"}
            req = urllib.request.Request(url=filename, headers=headers)
            contents = urllib.request.urlopen(req).read().decode()
            contents = contents.splitlines()
        except FileNotFoundError:
            print("Could not read url.")

    else:
        fid = open(filename, "r", encoding="utf-8")
        if fid.mode == "r":
            contents = fid.read()
        fid.close()
        contents = contents.splitlines()
        contents = list(filter(lambda x: x.strip(), contents))
        contents = list(filter(None, contents))

    energy_length = 0
    angle_length = 0
    line_number_data = -1

    for index, line in enumerate(contents):
        if re.match(REGEX_DICT["energy_len"], line):
            energy_length = int(line.split("=")[-1])

        if re.match(REGEX_DICT["angle_len"], line):
            angle_length = int(line.split("=")[-1])

        if re.match(REGEX_DICT["angle_data"], line):
            angle = line.split("=")[-1]
            angle = re.split(r"\s", angle)
            angle = list(filter(None, angle))
            angle = np.array(list(map(float, angle)))

        if line.find("Data 1") != -1:
            line_number_data = index

    energy = np.zeros(energy_length)
    data = np.zeros((energy_length, angle_length))

    for ii in range(energy_length):
        data_row = contents[line_number_data + 1 + ii]
        data_row = re.split(r"\s", data_row)
        data_row = list(filter(None, data_row))
        data_row = np.array(list(map(float, data_row)))
        energy[ii] = data_row[0]
        data[ii, :] = data_row[1:]

    return data, energy, angle
