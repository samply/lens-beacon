# Samply.Lens-Beacon Application

A GUI that allows researchers to run queries against Beacon 2 sites.

## Background

[Beacon 2](http://docs.genomebeacons.org/) is a standard API that allows federated querying of
genetic and medical information. Sites can implement this API to make their data searchable.
The API provides various safeguards to prevent sensitive patient data from landing in the
wrong hands.

[Lens](https://github.com/samply/lens) is a toolkit for building GUIs that can be used for querying medical data.

In this project, the Lens toolkit has been used to build a GUI that allow researchers to run searches over one or more
sites presenting the Beacon 2 API.

This GUI does not talk directly to Beacon sites. An intermediate backend system, called
[lens_beacon_service](https://github.com/samply/lens_beacon_service), is responsible for communication
with Beacon.

## Trying it out

You can use the supplied [docker-compose](./docker-compose.yml) file to test out this GUI with a public Beacon 2 site
([EGA Cineca](https://ega-archive.org/beacon-apis/cineca)):

``` shell
docker-compose up -d 
```

This will start the GUI and will additionally start the lens_beacon_service backend.

Point your browser at [localhost](http://localhost) in order to see the GUI. If you hit the "Search" button
without entering any search criteria, then the EGA Cineca site will be asked to provide summary information
on all of its patients, samples and genomic variants. You will see these displayed as tables, pie charts and
histograms in the results tiles of the GUI.

## Building a Docker image

If you make changes to the GUI but don't push them to the repository, then you will need to build a new Docker
image in order for them to become visible locally:

``` shell
docker build -t samply/lens-beacon . --no-cache
```

## Features of this GUI

The GUI divides into a search tree, on the left hand side, and a results section on the right.

### Search tree

Searches can be made for the following categories of data:

* Genetics
* Clinical data
* Biosamples

Behind the scenes, each of these searches is performed on a different Beacon endpoint (g_variants, individuals and
biosamples, respectively). These three searches are run independently of each other.

The Genetics category has two searchable attributes, DNA modification (variant) and Ensembl ID. The DNA modification
should be specified in the HGVS format and is assumed to be applicable to a human genome. The Ensembl ID search is a dummy
and doesn't actually do anything.

Clinical data has two attributes, Sex and Ethnicity. These are multiple choice attributes and the possible choices
can be seen if the attribute is expanded by clicking on the forward-arrow.

The Biosample category has only one attribute, Sample type. This is also a multiple choice attribute. The number of
sample types available in the Cineca dataset used by the standard test Beacon instance is relatively small.

### Results

The results section consists of a number of tiles that display various types of information.

First is the Overview tile. This is a table that summarizes, per site, the number of patients, specimens and genetic variants returned.
In the default version of this page, there will only be one site shown, EGA Cineca.

The next tile is a gender distribution, in the form of a pie chart. This shows the distribution over all Beacon sites.

Then comes a bar chart, showing the distribution of the various ethnicities over all sites.

Finally, a histogram of samples categorized by sample type is shown

## Backend component

The GUI is implemented as a lightweight component, there is no significant processing going on within it beyond what is
needed for rendering.

Most of the hard work is done in a backend component, the [lens_beacon_service](https://github.com/samply/lens_beacon_service).

In the GUI, the user settings in the search tree (e.g. the search for Sex="female") are translated into a nested hierarchical graph,
called an AST. This is serialized into a JSON string and sent to the lens_beacon_service backend.

The backend converts the searches specified in the AST into relevant Beacon filters and runs queries against the
three Beacon endpoints mentioned above.

The results from the Beacon sites are converted into FHIR measure reports. Not because FHIR is involved in the search,
but because the GUI needs this format.

The measure reports are serialized and returned to the GUI.

The GUI takes the measure reports and uses the information they contain to populate the various results tiles.

## Customization

Two graphics are used in constructing the GUI, [cropped-EJP-RD-txt-horizontal.png](src%2Fassets%2Fcropped-EJP-RD-txt-horizontal.png)
(the logo used at the top left hand side) and [cropped-index-32x32.png](src%2Fassets%2Fcropped-index-32x32.png)
(the favicon shown in the browser tab). You can exchange these for your own images. They are used in
[app.component.html](src%2Fapp%2Fapp.component.html) and [index.html](src%2Findex.html) respectively.

[index.html](src%2Findex.html) is also the place where the title on the top right hand side of the page
is defined.

Colors and other look-and-feel aspects of the GUI can be modified by making changes to the CSS in [styles.css](src%2Fstyles.css),
[app.component.css](./src/app/app.component.css) and [main.component.css](src%2Fapp%2Fmain%2Fmain.component.css).

Changes to the page layout at the top-level can be carried out in the HTML files, [index.html](src%2Findex.html),
[app.component.html](src%2Fapp%2Fapp.component.html) and [main.component.html](src%2Fapp%2Fmain%2Fmain.component.html)

Changes to the search tree need to be done in the relevant Typescript file: [catalogue.ts](src%2Fassets%2Fcatalogue.ts).
If you only need to delete existing search attributes or categories, then editing this file is sufficient. If you wish
to modify existing attributes or add new attributes, you will also need to make changes to the lens_beacon_service
backend component.

The results tiles are configured in [main.component.ts](src%2Fapp%2Fmain%2Fmain.component.ts) (scroll down
to the bottom of this file). If you only want to delete results tiles from the GUI, then editing this
file is sufficient. If you want to make changes to data types or add completely new results tiles, then
you will also need to change lens_beacon_service.
