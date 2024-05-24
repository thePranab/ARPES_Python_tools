# -*- coding: utf-8 -*-
"""
Purpose: To load ARPES MAP data from the ZIP file produced by Scienta SES program.
Version: 20240524
@author: Pranab Das (GitHub: @pranabdas)
[data, energy, theta, phi] = load_map_data("map_data.zip")
"""

from io import BytesIO
from urllib.request import urlopen
import zipfile
import re
import numpy as np
from src.utils import REGEX_DICT


def load_ses_map(filename):
    """
    Reads SES map data from zipfile.
    """

    # Check the path contains the zip file
    if filename[-4:].lower() != ".zip":
        print("Please provide a .zip file!")

    if (filename[:7] == "http://") or (filename[:8] == "https://"):
        web = True
    else:
        web = False

    if web:
        try:
            filename = urlopen(filename)
            map_data = zipfile.ZipFile(BytesIO(filename.read()))
        except FileNotFoundError:
            print("Could not read url.")
    else:
        map_data = zipfile.ZipFile(filename, "r")

    ini_file = map_data.open("viewer.ini")
    contents = ini_file.readlines()
    ini_file.close()

    contents = list(map(lambda x: x.decode().strip(), contents))

    energy_length = 0
    theta_length = 0
    phi_length = 0
    energy_offset = 0.0
    theta_offset = 0.0
    phi_offset = 0.0
    energy_delta = 0.0
    theta_delta = 0.0
    phi_delta = 0.0
    map_data_path = ""

    for line in contents:
        if re.match(REGEX_DICT["map_width"], line):
            energy_length = int(line.split("=")[-1])

        if re.match(REGEX_DICT["map_height"], line):
            theta_length = int(line.split("=")[-1])

        if re.match(REGEX_DICT["map_depth"], line):
            phi_length = int(line.split("=")[-1])

        if re.match(REGEX_DICT["map_data_path"], line):
            map_data_path = line.split("=")[-1].strip()

        if re.match(REGEX_DICT["map_width_offset"], line):
            energy_offset = float(line.split("=")[-1])

        if re.match(REGEX_DICT["map_height_offset"], line):
            theta_offset = float(line.split("=")[-1])

        if re.match(REGEX_DICT["map_depth_offset"], line):
            phi_offset = float(line.split("=")[-1])

        if re.match(REGEX_DICT["map_width_delta"], line):
            energy_delta = float(line.split("=")[-1])

        if re.match(REGEX_DICT["map_height_delta"], line):
            theta_delta = float(line.split("=")[-1])

        if re.match(REGEX_DICT["map_depth_delta"], line):
            phi_delta = float(line.split("=")[-1])

    fid = map_data.open(map_data_path, "r")
    data = np.frombuffer(fid.read(), dtype=np.dtype(np.float32))
    data = data.astype(np.float64)
    data = np.reshape(data, (energy_length, theta_length, phi_length), order="F")
    fid.close()

    energy_end = energy_offset + (energy_length - 1) * energy_delta
    energy = np.linspace(energy_offset, energy_end, num=energy_length)

    theta_end = theta_offset + (theta_length - 1) * theta_delta
    theta = np.linspace(theta_offset, theta_end, num=theta_length)

    phi_end = phi_offset + (phi_length - 1) * phi_delta
    phi = np.linspace(phi_offset, phi_end, num=phi_length)

    return data, energy, theta, phi
