(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _station_station_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./station/station.component */ "./src/app/station/station.component.ts");




var routes = [
    { path: 'playlist/:pid', component: _station_station_component__WEBPACK_IMPORTED_MODULE_3__["StationComponent"] },
    { path: 'radio', component: _station_station_component__WEBPACK_IMPORTED_MODULE_3__["StationComponent"] },
    { path: 'station/:tid', component: _station_station_component__WEBPACK_IMPORTED_MODULE_3__["StationComponent"] },
    { path: '**', redirectTo: 'radio' },
    { path: '', pathMatch: 'full', redirectTo: 'radio' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body style='margin:5pt'>\n<h1>LIBRANDORA</h1>\n\n\n<router-outlet></router-outlet>\n</body>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _song_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./song.service */ "./src/app/song.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(songservice, _route, _router) {
        this.songservice = songservice;
        this._route = _route;
        this._router = _router;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_song_service__WEBPACK_IMPORTED_MODULE_3__["SongService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _song_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./song.service */ "./src/app/song.service.ts");
/* harmony import */ var _station_station_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./station/station.component */ "./src/app/station/station.component.ts");
/* harmony import */ var _subcomponents_playlistcreator_playlistcreator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./subcomponents/playlistcreator/playlistcreator.component */ "./src/app/subcomponents/playlistcreator/playlistcreator.component.ts");
/* harmony import */ var _subcomponents_tagdisplay_tagdisplay_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./subcomponents/tagdisplay/tagdisplay.component */ "./src/app/subcomponents/tagdisplay/tagdisplay.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _station_station_component__WEBPACK_IMPORTED_MODULE_8__["StationComponent"],
                _subcomponents_playlistcreator_playlistcreator_component__WEBPACK_IMPORTED_MODULE_9__["PlaylistcreatorComponent"],
                _subcomponents_tagdisplay_tagdisplay_component__WEBPACK_IMPORTED_MODULE_10__["TagdisplayComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_song_service__WEBPACK_IMPORTED_MODULE_7__["SongService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/song.service.ts":
/*!*********************************!*\
  !*** ./src/app/song.service.ts ***!
  \*********************************/
/*! exports provided: SongService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongService", function() { return SongService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SongService = /** @class */ (function () {
    function SongService(_http) {
        this._http = _http;
    }
    SongService.prototype.playlists = function () {
        return this._http.get('/api/playlist/all');
    };
    SongService.prototype.playlistshow = function (pid) {
        return this._http.get('/api/playlist/' + pid);
    };
    SongService.prototype.stationshow = function (tid) {
        return this._http.get('/api/station/' + tid);
    };
    SongService.prototype.songshow = function (sid, edits) {
        if (edits) {
            return this._http.post('/api/song/' + sid, edits);
        }
        ;
        return this._http.get('/api/song/' + sid);
    };
    SongService.prototype.randomsong = function () {
        return this._http.get('/api/randomsong');
    };
    SongService.prototype.stationnext = function (tid) {
        return this._http.get('/api/station/' + tid + '/nexttrack');
    };
    SongService.prototype.likesong = function (tid, sid) {
        return this._http.get('/api/station/' + tid + '/likesong/' + sid);
    };
    SongService.prototype.dislikesong = function (tid, sid) {
        return this._http.get('/api/station/' + tid + '/dislikesong/' + sid);
    };
    SongService.prototype.createtag = function (sid, tag) {
        return this._http.post('/api/song/' + sid + '/createtag', tag);
    };
    SongService.prototype.indextag = function () {
        return this._http.get('/api/tag/all');
    };
    SongService.prototype.addtag = function (sid, tgid) {
        return this._http.get('/api/song/' + sid + '/add/' + tgid);
    };
    SongService.prototype.removetag = function (sid, tgid) {
        return this._http.get('/api/song/' + sid + '/remove/' + tgid);
    };
    SongService.prototype.indexgenre = function () {
        return this._http.get('/api/genre/all');
    };
    SongService.prototype.createplaylist = function (edits) {
        return this._http.post('/api/playlist/new', edits);
    };
    SongService.prototype.removesong = function (pid, sid) {
        return this._http.get('/api/playlist/' + pid + '/removesong/' + sid);
    };
    SongService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SongService);
    return SongService;
}());



/***/ }),

/***/ "./src/app/station/station.component.css":
/*!***********************************************!*\
  !*** ./src/app/station/station.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tagborder {\r\n    border: 1pt solid black;\r\n    background-color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlvbi9zdGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvc3RhdGlvbi9zdGF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFnYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMXB0IHNvbGlkIGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/station/station.component.html":
/*!************************************************!*\
  !*** ./src/app/station/station.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='row'>\r\n<div class='col-6'>\r\n  <h2 *ngIf=\"pagetype=='station'\">Station: {{station.station.name}}</h2>\r\n  <h2 *ngIf=\"pagetype=='playlist'\">Playlist: {{playlist.playlist.name}}</h2>\r\n  <h2 *ngIf=\"pagetype=='radio'\">Radio Library Shuffle</h2>\r\n\r\n  <div>\r\n    <audio  controls #radioplayer [src]=\"song.location\" (ended)=\"nexttrack()\" autoplay='true' name='audioplayer'></audio>\r\n  </div>\r\n  <button *ngIf=\"pagetype=='station' || 'playlist'\" style='margin:5px;' class='btn-secondary' (click)=\"nexttrack()\" id='next'>Next Track</button>  \r\n  <button style='margin:5px;' class='btn-secondary' (click)=\"randomtrack()\" id='next'>Random</button> \r\n  <!-- <button class='btn-secondary' (click)=\"pauseaudio()\" id='pause'>Start/Stop Music</button> -->\r\n  <button *ngIf=\"pagetype=='station'\" style='margin:5px;' class='btn-info' (click)=\"likesong()\" id='pause'>LIKE</button>\r\n  <button *ngIf=\"pagetype=='station'\" style='margin:5px;' class='btn-danger' (click)=\"dislikesong()\" id='pause'>DISLIKE</button>\r\n  <button *ngIf=\"pagetype=='playlist'\" style='margin:5px;' class='btn-danger' (click)=\"removesong()\" id='pause'>Remove</button>\r\n  <div>\r\n    <p id='title'>Title: {{song.title}}</p>\r\n    <p id='artist'>Artist: {{song.artist}}</p>\r\n    <p id='album'>Album: {{song.album}}</p>\r\n    <p id='rating'>Rating: <span *ngIf=\"!song.rating\">Not yet rated</span>{{song.rating}}</p>\r\n    <form (ngSubmit)='editsong()'>\r\n      Rating:<input [(ngModel)]=\"song.rating\" type='range' min='0' max='10' style='width:30%;' name='rating'>  \r\n      <input class='btn-secondary' type='submit' value='RATE'>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div class='col-6'>\r\n<app-tagdisplay [song]=\"song\"></app-tagdisplay>\r\n</div>\r\n</div>\r\n<!-- <app-playlistcreator></app-playlistcreator> -->\r\n"

/***/ }),

/***/ "./src/app/station/station.component.ts":
/*!**********************************************!*\
  !*** ./src/app/station/station.component.ts ***!
  \**********************************************/
/*! exports provided: StationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationComponent", function() { return StationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _song_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../song.service */ "./src/app/song.service.ts");




var StationComponent = /** @class */ (function () {
    function StationComponent(songservice, _route, _router) {
        this.songservice = songservice;
        this._route = _route;
        this._router = _router;
        this.pagetype = '';
        this.song = { "id": 3215, "location": "../../music/itunes/itunes media/music\\Dr. Dre\\2001\\11 The Next Episode.m4a", "album": "2001", "rating": 0, "length": "", "mood": "", "title": "The Next Episode", "artist": "Dr. Dre", "albumartist": "", "tracknumber": "", "genre": "Rap", "date": "", "originaldate": "1999", "performer": "", "comment": "", "tags": [] };
        this.station = { "station": { "id": 1, "name": "funky", "description": "testing a radio playlist" }, 'songlist': [], 'song': { "id": 3215, "location": "../../music/itunes/itunes media/music\\Dr. Dre\\2001\\11 The Next Episode.m4a", "album": "2001", "rating": 0, "length": "", "mood": "", "title": "The Next Episode", "artist": "Dr. Dre", "albumartist": "", "tracknumber": "", "genre": "Rap", "date": "", "originaldate": "1999", "performer": "", "comment": "", "tags": [] } };
        this.playlist = { "playlist": { "id": 1, "name": "funky", "description": "testing a radio playlist", "kind": "radio" }, 'songlist': [], 'songs': {} };
        this.songindex = 0;
        this.object = Object;
    }
    StationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pagetype = this._route.routeConfig.path.split("/", 1)[0];
        if (this.pagetype == 'station') {
            this._route.params.subscribe(function (params) {
                _this.songservice.stationshow(params.tid).subscribe(function (data) {
                    if (data) {
                        _this.station = data;
                        _this.song = _this.station.song;
                        _this.startaudio();
                    }
                    else {
                        _this.pagetype = 'radio';
                        _this.randomtrack();
                    }
                });
            });
        }
        else if (this.pagetype == 'playlist') {
            this._route.params.subscribe(function (params) {
                _this.songservice.playlistshow(params.pid).subscribe(function (data) {
                    _this.playlist = data;
                    _this.songservice.songshow(_this.playlist.songlist[0]).subscribe(function (data) {
                        if (data) {
                            _this.song = data;
                            _this.startaudio();
                        }
                        else {
                            _this.pagetype = 'radio';
                            _this.randomtrack();
                        }
                    });
                });
            });
        }
        else {
            this.pagetype = 'radio';
            this.randomtrack();
        }
    };
    StationComponent.prototype.pauseaudio = function () {
        var radio = this.radioplayer.nativeElement;
        if (radio.paused) {
            radio.play();
        }
        else {
            radio.pause();
        }
    };
    StationComponent.prototype.startaudio = function () {
        var radio = this.radioplayer.nativeElement;
        radio.play();
    };
    StationComponent.prototype.likesong = function () {
        this._route.routeConfig.path;
        this.songservice.likesong(this.station.station.id, this.song.id).subscribe(function (data) { });
    };
    StationComponent.prototype.dislikesong = function () {
        this.songservice.dislikesong(this.station.station.id, this.song.id).subscribe(function (data) { });
        this.nexttrack();
    };
    StationComponent.prototype.removesong = function () {
        this.songservice.removesong(this.playlist.playlist.id, this.song.id).subscribe(function (data) { });
        this.nexttrack();
    };
    StationComponent.prototype.editsong = function () {
        this.songservice.songshow(this.song.id, { rating: this.song.rating }).subscribe(function (data) { });
    };
    StationComponent.prototype.randomtrack = function () {
        var _this = this;
        var radio = this.radioplayer.nativeElement;
        radio.pause();
        this.songservice.randomsong().subscribe(function (data) { _this.song = data; radio.play(); });
    };
    StationComponent.prototype.nexttrack = function () {
        var _this = this;
        console.log(this.pagetype);
        var radio = this.radioplayer.nativeElement;
        radio.pause();
        if (this.pagetype == 'station') {
            this.songservice.stationnext(this.station.station.id).subscribe(function (data) { _this.song = data; radio.play(); });
        }
        else if (this.pagetype == 'playlist') {
            if ((this.songindex + 1) >= (this.playlist.songlist.length)) {
                this.songindex = 0;
            }
            else {
                this.songindex++;
            }
            ;
            this.songservice.songshow(this.playlist.songlist[this.songindex]).subscribe(function (data) { _this.song = data; radio.play(); });
        }
        else {
            this.randomtrack();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('radioplayer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StationComponent.prototype, "radioplayer", void 0);
    StationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-station',
            template: __webpack_require__(/*! ./station.component.html */ "./src/app/station/station.component.html"),
            styles: [__webpack_require__(/*! ./station.component.css */ "./src/app/station/station.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_song_service__WEBPACK_IMPORTED_MODULE_3__["SongService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StationComponent);
    return StationComponent;
}());



/***/ }),

/***/ "./src/app/subcomponents/playlistcreator/playlistcreator.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/subcomponents/playlistcreator/playlistcreator.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmNvbXBvbmVudHMvcGxheWxpc3RjcmVhdG9yL3BsYXlsaXN0Y3JlYXRvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/subcomponents/playlistcreator/playlistcreator.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/subcomponents/playlistcreator/playlistcreator.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>New Playlist</h2>\n  <form (ngSubmit)=\"createplaylist()\">\n    Name: <input [(ngModel)]=\"creation.name\" name='name' type=text>\n    <select  [(ngModel)]=\"creation.genres\" multiple name='genre'>\n      <option *ngFor=\"let g of genres\" value=\"{{g.genre}}\">{{g.genre}}</option>\n      </select>\n      <select  [(ngModel)]=\"creation.tags\" multiple name='tag'>\n          <option *ngFor=\"let t of tags\" value=\"{{t.id}}\">{{t.name}}</option>\n          </select>\n    <textarea [(ngModel)]=\"creation.description\" name='description'>Description</textarea>\n\n        <input type='submit' value='New Playlist' name='submit'>\n  </form>"

/***/ }),

/***/ "./src/app/subcomponents/playlistcreator/playlistcreator.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/subcomponents/playlistcreator/playlistcreator.component.ts ***!
  \****************************************************************************/
/*! exports provided: PlaylistcreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistcreatorComponent", function() { return PlaylistcreatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _song_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../song.service */ "./src/app/song.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PlaylistcreatorComponent = /** @class */ (function () {
    function PlaylistcreatorComponent(songservice, _route, _router) {
        this.songservice = songservice;
        this._route = _route;
        this._router = _router;
        this.tags = [];
        this.creation = { "genres": [], "tags": [], 'name': '', 'description': '' };
    }
    PlaylistcreatorComponent.prototype.ngOnInit = function () {
        this.genresindex();
        this.tagsindex();
    };
    PlaylistcreatorComponent.prototype.genresindex = function () {
        var _this = this;
        this.songservice.indexgenre().subscribe(function (data) { _this.genres = data; });
    };
    PlaylistcreatorComponent.prototype.tagsindex = function () {
        var _this = this;
        var tags = this.tags;
        this.songservice.indextag().subscribe(function (data) {
            var tagkeys = Object.keys(data);
            for (var _i = 0, tagkeys_1 = tagkeys; _i < tagkeys_1.length; _i++) {
                var k = tagkeys_1[_i];
                for (var _a = 0, _b = data[k]; _a < _b.length; _a++) {
                    var item = _b[_a];
                    tags.push(item);
                }
            }
            ;
            _this.tags = tags;
        });
    };
    PlaylistcreatorComponent.prototype.createplaylist = function () {
        console.log(this.creation);
        this.songservice.createplaylist(this.creation).subscribe(function (data) { console.log(data); });
        this.creation = { "genres": [], "tags": [], 'name': '', 'description': '' };
    };
    PlaylistcreatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-playlistcreator',
            template: __webpack_require__(/*! ./playlistcreator.component.html */ "./src/app/subcomponents/playlistcreator/playlistcreator.component.html"),
            styles: [__webpack_require__(/*! ./playlistcreator.component.css */ "./src/app/subcomponents/playlistcreator/playlistcreator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_song_service__WEBPACK_IMPORTED_MODULE_2__["SongService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PlaylistcreatorComponent);
    return PlaylistcreatorComponent;
}());



/***/ }),

/***/ "./src/app/subcomponents/tagdisplay/tagdisplay.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/subcomponents/tagdisplay/tagdisplay.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmNvbXBvbmVudHMvdGFnZGlzcGxheS90YWdkaXNwbGF5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/subcomponents/tagdisplay/tagdisplay.component.html":
/*!********************************************************************!*\
  !*** ./src/app/subcomponents/tagdisplay/tagdisplay.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>#TAGS</h3>\n<div style='text-align:center;' *ngFor=\"let i of object.keys(alltags); let y=index\">\n  <h5>{{i}}</h5>\n  <button *ngFor=\"let h of alltags[i]; let x=index\" style='margin:5px;' (click)=\"switchtag(i,x)\" class='btn btn-outline-secondary btn-small' [class.btn-outline-info]=\"(y%2==0)\" [class.btn-warning]=\"h.songtagged\" >{{h.name}}</button>\n</div>\n<form (ngSubmit)='createtag()'>\n  <input [(ngModel)]=\"tag.name\" type='text' name='tagname'>  \n  <select [(ngModel)]=\"tag.kind\" name='tagkind'>\n    <option *ngFor=\"let i of object.keys(alltags)\" value='{{i}}'>{{i}}</option>\n  </select>\n  <input type='submit' value='#TAG'>\n</form>\n\n"

/***/ }),

/***/ "./src/app/subcomponents/tagdisplay/tagdisplay.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/subcomponents/tagdisplay/tagdisplay.component.ts ***!
  \******************************************************************/
/*! exports provided: TagdisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagdisplayComponent", function() { return TagdisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _song_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../song.service */ "./src/app/song.service.ts");



var TagdisplayComponent = /** @class */ (function () {
    function TagdisplayComponent(songservice) {
        this.songservice = songservice;
        this.tag = { name: '', kind: '' };
        this.alltags = { 'genres': [], 'decades': [], 'moods': [], 'styles': [], 'misc': [] };
        this.object = Object;
    }
    Object.defineProperty(TagdisplayComponent.prototype, "song", {
        get: function () { return this._song; },
        set: function (inputsong) {
            this._song = inputsong;
            this.checktags();
        },
        enumerable: true,
        configurable: true
    });
    TagdisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.songservice.indextag().subscribe(function (data) { _this.alltags = data; _this.checktags(); });
    };
    TagdisplayComponent.prototype.checktags = function () {
        var thesong = this._song;
        var tagtypes = Object.keys(this.alltags);
        for (var _i = 0, tagtypes_1 = tagtypes; _i < tagtypes_1.length; _i++) {
            var i = tagtypes_1[_i];
            for (var _a = 0, _b = this.alltags[i]; _a < _b.length; _a++) {
                var h = _b[_a];
                if (thesong.tags.includes(h.id)) {
                    h.songtagged = true;
                }
                else {
                    h.songtagged = false;
                }
            }
        }
    };
    TagdisplayComponent.prototype.switchtag = function (i, x) {
        if (this.alltags[i][x].songtagged) {
            this.alltags[i][x].songtagged = false;
            this.songservice.removetag(this.song.id, this.alltags[i][x].id).subscribe(function (data) { });
        }
        else {
            this.alltags[i][x].songtagged = true;
            this.songservice.addtag(this.song.id, this.alltags[i][x].id).subscribe(function (data) { });
        }
    };
    TagdisplayComponent.prototype.createtag = function () {
        var _this = this;
        this.songservice.createtag(this.song.id, this.tag).subscribe(function (data) {
            _this.song = data;
            _this.songservice.indextag().subscribe(function (data) { _this.alltags = data; _this.checktags(); });
            _this.tag = { name: '', kind: '' };
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], TagdisplayComponent.prototype, "song", null);
    TagdisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tagdisplay',
            template: __webpack_require__(/*! ./tagdisplay.component.html */ "./src/app/subcomponents/tagdisplay/tagdisplay.component.html"),
            styles: [__webpack_require__(/*! ./tagdisplay.component.css */ "./src/app/subcomponents/tagdisplay/tagdisplay.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_song_service__WEBPACK_IMPORTED_MODULE_2__["SongService"]])
    ], TagdisplayComponent);
    return TagdisplayComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Gameshark9\Desktop\librandora\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map