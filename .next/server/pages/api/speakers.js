"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/speakers";
exports.ids = ["pages/api/speakers"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(api)/./pages/api/speakers/index.js":
/*!*************************************!*\
  !*** ./pages/api/speakers/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst config = {\n    api: {\n        externalResolver: true\n    }\n};\nconst { promisify  } = __webpack_require__(/*! util */ \"util\");\nconst readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));\nconst delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\nasync function handler(req, res) {\n    const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(\"./\", \"db.json\");\n    try {\n        const readFileData = await readFile(jsonFile);\n        await delay(1000);\n        const speakers = JSON.parse(readFileData).speakers;\n        if (!speakers) res.status(404).send(\"Error: Request failed with status code 404\");\n        //res.status(200).json(speakers); keeps json minified but harder to read\n        res.setHeader(\"Content-Type\", \"application/json\");\n        res.status(200).send(JSON.stringify(speakers, null, 2));\n        console.log(`GET /api/speakers status: 200`);\n    } catch (e) {\n        console.log(\"/api/speakers error:\", e);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3BlYWtlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdCO0FBQ0o7QUFFYixNQUFNRSxNQUFNLEdBQUc7SUFDcEJDLEdBQUcsRUFBRTtRQUNIQyxnQkFBZ0IsRUFBRSxJQUFJO0tBQ3ZCO0NBQ0Y7QUFDRCxNQUFNLEVBQUVDLFNBQVMsR0FBRSxHQUFHQyxtQkFBTyxDQUFDLGtCQUFNLENBQUM7QUFDckMsTUFBTUMsUUFBUSxHQUFHRixTQUFTLENBQUNKLG9EQUFXLENBQUM7QUFDdkMsTUFBTU8sS0FBSyxHQUFHLENBQUNDLEVBQUUsR0FBSyxJQUFJQyxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxHQUFLQyxVQUFVLENBQUNELE9BQU8sRUFBRUYsRUFBRSxDQUFDLENBQUM7QUFFeEQsZUFBZUksT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxRQUFRLEdBQUdoQixtREFBWSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUM7SUFDOUMsSUFBSTtRQUNGLE1BQU1pQixZQUFZLEdBQUcsTUFBTVYsUUFBUSxDQUFDUyxRQUFRLENBQUM7UUFDN0MsTUFBTVIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE1BQU1VLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNILFlBQVksQ0FBQyxDQUFDQyxRQUFRO1FBQ2xELElBQUksQ0FBQ0EsUUFBUSxFQUNYSCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLDRDQUE0QyxDQUFDLENBQUM7UUFDckUsd0VBQXdFO1FBQ3hFUCxHQUFHLENBQUNRLFNBQVMsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNsRFIsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsSUFBSSxDQUFDSyxTQUFTLENBQUNOLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RE8sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7SUFDL0MsRUFBRSxPQUFPQyxDQUFDLEVBQUU7UUFDVkYsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLEVBQUVDLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtaW4tcmVhY3QtMTgtcGx1cmFsc2lnaHQtY291cnNlLy4vcGFnZXMvYXBpL3NwZWFrZXJzL2luZGV4LmpzPzdkOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgZXh0ZXJuYWxSZXNvbHZlcjogdHJ1ZSxcbiAgfSxcbn1cbmNvbnN0IHsgcHJvbWlzaWZ5IH0gPSByZXF1aXJlKFwidXRpbFwiKTtcbmNvbnN0IHJlYWRGaWxlID0gcHJvbWlzaWZ5KGZzLnJlYWRGaWxlKTtcbmNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGpzb25GaWxlID0gcGF0aC5yZXNvbHZlKFwiLi9cIiwgXCJkYi5qc29uXCIpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlYWRGaWxlRGF0YSA9IGF3YWl0IHJlYWRGaWxlKGpzb25GaWxlKTtcbiAgICBhd2FpdCBkZWxheSgxMDAwKTtcbiAgICBjb25zdCBzcGVha2VycyA9IEpTT04ucGFyc2UocmVhZEZpbGVEYXRhKS5zcGVha2VycztcbiAgICBpZiAoIXNwZWFrZXJzKVxuICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoXCJFcnJvcjogUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSA0MDRcIik7XG4gICAgLy9yZXMuc3RhdHVzKDIwMCkuanNvbihzcGVha2Vycyk7IGtlZXBzIGpzb24gbWluaWZpZWQgYnV0IGhhcmRlciB0byByZWFkXG4gICAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoSlNPTi5zdHJpbmdpZnkoc3BlYWtlcnMsIG51bGwsIDIpKTtcbiAgICBjb25zb2xlLmxvZyhgR0VUIC9hcGkvc3BlYWtlcnMgc3RhdHVzOiAyMDBgKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiL2FwaS9zcGVha2VycyBlcnJvcjpcIiwgZSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJwYXRoIiwiZnMiLCJjb25maWciLCJhcGkiLCJleHRlcm5hbFJlc29sdmVyIiwicHJvbWlzaWZ5IiwicmVxdWlyZSIsInJlYWRGaWxlIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJqc29uRmlsZSIsInJlYWRGaWxlRGF0YSIsInNwZWFrZXJzIiwiSlNPTiIsInBhcnNlIiwic3RhdHVzIiwic2VuZCIsInNldEhlYWRlciIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/speakers/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/speakers/index.js"));
module.exports = __webpack_exports__;

})();