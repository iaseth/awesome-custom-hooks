


def get_file_info_as_json(filepath):
	filetext = open(filepath).read()
	filelines = filetext.split("\n")
	strippedlines = [x.strip() for x in filelines]
	first_words = [x.split(" ")[0] for x in strippedlines]

	fileinfo = {}
	fileinfo["path"] = filepath

	fileinfo["linesCount"] = len(filelines)
	fileinfo["emptyLinesCount"] = strippedlines.count("")
	fileinfo["importsCount"] = first_words.count("import")
	fileinfo["exportsCount"] = first_words.count("export")
	fileinfo["returnsCount"] = first_words.count("return")

	return fileinfo


