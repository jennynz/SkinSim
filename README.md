# SkinSim

This is the prototype of a web-based app that we designed for our BIOMENG 791 project, which involves askin surgery training tool based on a biomechanical finite-element model.

## Installation

To get this prototype up and running, simply clone and open `pages/index.html` in your browser (Chrome recommended).

## Usage

At the moment, this prototype is mostly a visual front-end proof of concept. An implementation of the simulation can be found on the `sim.html` page, accessible from the "Training" menu item in the sidebar.

The WebGL app allows the user to view a 2D deformation going from an open to closed state as the user omoves a slider. The 2D "skin block" is also able to be panned, rotated and zoomed using intuitive touch gestures.

## Credits

* Group 4: James Cronin, Murari Ramesh, Jenny Sahng, Olivia Spratt
* Supervisors: Martyn Nash, Poul Nielsen ([Auckland Bioengineering Institute](http://www.abi.auckland.ac.nz/en.html))
* Client: Andrew MacGill
* Texture mapping: Mark Sagar ([Laboratory for Animate Technologies](http://www.abi.auckland.ac.nz/en/about/our-research/animate-technologies.html))
* ABAQUS Finite element model: Rachel Boswell

## How to use (from original WebGL scaffolding)

On the command prompt (cmd), navigate to the Google Chrome application and execute Chrome while allowing file access.

1. `cd C:\Program Files (x86)\Google\Chrome\Application\`
2. `chrome.exe --allow-file-access-from-files --allow-file-access`

Then open `examples/skin_viewer_obj.html` using google chrome.
To change texture, upload .jpg image into textures file and rename as `skin`.


