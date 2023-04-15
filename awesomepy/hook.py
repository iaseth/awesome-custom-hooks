from .utils import get_file_info_as_json



class CustomHook:
	def __init__(self, entry):
		self.entry = entry
		self.name = entry.split("/")[-1]
		self.debugName = self.name + "Debug"

		self.capname = self.name[0].upper() + self.name[1:]
		self.exampleComponentName = self.capname + "Example"
		self.filename = self.name + ".ts"
		self.path = f"{entry}.ts"
		self.prod_src_path = f"src/prod/{entry}.ts"
		self.dev_src_path = f"src/dev/{entry}Debug.ts"

		self.prod_js_path = f"dist/prod/{entry}.js"
		self.dev_js_path = f"dist/dev/{entry}Debug.js"
		self.prod_dts_path = f"dist/prod/{entry}.d.ts"
		self.dev_dts_path = f"dist/dev/{entry}Debug.d.ts"

	def as_json_object(self):
		jo = {}
		jo["name"] = self.name
		jo["capname"] = self.capname
		jo["exampleComponentName"] = self.exampleComponentName
		jo["entry"] = self.entry
		jo["filename"] = self.filename

		jo["prodSrcPath"] = self.prod_src_path
		jo["devSrcPath"] = self.dev_src_path

		jo["prodJsPath"] = self.prod_js_path
		jo["devJsPath"] = self.dev_js_path
		jo["prodDtsPath"] = self.prod_dts_path
		jo["devDtsPath"] = self.dev_dts_path

		jo["srcFileInfo"] = get_file_info_as_json(self.prod_src_path)
		jo["jsFileInfo"] = get_file_info_as_json(self.prod_js_path)
		jo["dtsFileInfo"] = get_file_info_as_json(self.prod_dts_path)

		jo["returnStatement"] = self.get_return_statement()
		return jo

	def print(self):
		print(self)

	def get_return_statement(self):
		filetext = open(self.prod_src_path).read()
		filelines = [x.strip() for x in filetext.split("\n")]
		return_statements = [x for x in filelines if x.startswith("return ")]
		return return_statements[-1] if len(return_statements) > 0 else "Not found"


	def create_modules(self):
		filepath = self.prod_src_path
		if os.path.isfile(filepath):
			print(f"Exists: {filepath}")
		else:
			with open(filepath, "w") as f:
				f.write("")
			print(f"Created: {filepath}")


	def __str__(self):
		return f"CustomHook \"{self.name}\" ({self.prod_src_path})"


