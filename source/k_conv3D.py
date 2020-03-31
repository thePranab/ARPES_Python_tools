#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program: This program converts 3D ARPES Fermi map data from real space to
k-space.
Version: 20191207
@author: Pranab Das (Twitter: @pranab_das)
"""

def k_conv3D(data, energy, theta, phi, fermi_energy):
    '''
    [data_k, e_bin, kx, ky] = k_conv3D(data, energy, theta, phi, fermi_energy)
    This function requires intensity data as three dimensional array (x-dimension is along energy, y-dimension is along theta, z-dimension is along phi), and energy theta and phi as one dimensional array. Also we need to provide the position of Fermi energy.

    Then the funtion returns intensity in k-space, binding energy, kx and ky vectors.
    '''
    import numpy as np
    from scipy import interpolate

    data = np.transpose(data, (2, 1, 0))
    # Transpose the data, 0 -> phi axis, 1 -> theta axis, 2 -> energy axis
    data_k = np.zeros([np.shape(data)[0], np.shape(data)[1], np.shape(data)[2]])
    kx_min = 0.512 * np.sqrt(energy[-1]) \
    * np.sin(theta[0]*np.pi/180)
    kx_max = 0.512 * np.sqrt(energy[-1]) \
    * np.sin(theta[len(theta)-1]*np.pi/180)
    kx = np.linspace(kx_min, kx_max, len(theta))

    ky_min = 0.512 * np.sqrt(energy[-1]) \
    * np.sin(phi[0]*np.pi/180)
    ky_max = 0.512 * np.sqrt(energy[-1]) \
    * np.sin(phi[len(phi)-1]*np.pi/180)
    ky = np.linspace(ky_min, ky_max, len(phi))

    for ii in range(np.shape(data)[2]):
        theta_temp = np.arcsin(kx/(0.512*np.sqrt(energy[ii])))*180/np.pi
        phi_temp = np.linspace(0, 0, len(phi))
        theta_grid, phi_grid = np.meshgrid(theta_temp, phi_temp)

        for jj in range(np.shape(data)[1]):
            for kk in range(np.shape(data)[0]):
                phi_grid[kk, jj] = np.arcsin(ky[kk]/(0.512*np.sqrt(energy[ii])\
                        *np.cos(theta_grid[0, jj]*np.pi/180)))*180/np.pi

        func = interpolate.RectBivariateSpline(phi, theta, data[:, :, ii])
        data_k[:, :, ii] = func.ev(phi_grid, theta_grid)

        # nan wrapping for outside interpolation range data points
        for jj in range(np.shape(data)[1]):
            for kk in range(np.shape(data)[0]):
                if theta_temp[jj] < theta[0] or \
                theta_temp[jj] > theta[-1] or \
                phi_grid[kk, jj] < phi[0] or \
                phi_grid[kk, jj] > phi[-1]:
                    data_k[kk, jj, ii] = np.nan

    data_k = np.transpose(data_k, (2, 1, 0)) # Transpose back to original order

    e_bin = fermi_energy - energy

    return data_k, e_bin, kx, ky
