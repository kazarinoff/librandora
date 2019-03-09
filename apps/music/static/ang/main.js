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
/* harmony import */ var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playlist/playlist.component */ "./src/app/playlist/playlist.component.ts");
/* harmony import */ var _radio_radio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radio/radio.component */ "./src/app/radio/radio.component.ts");
/* harmony import */ var _station_station_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./station/station.component */ "./src/app/station/station.component.ts");






var routes = [
    { path: 'playlist/:pid', component: _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_3__["PlaylistComponent"] },
    { path: 'radio', component: _radio_radio_component__WEBPACK_IMPORTED_MODULE_4__["RadioComponent"] },
    { path: 'playlist/:pid', component: _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_3__["PlaylistComponent"] },
    { path: 'station/:tid', component: _station_station_component__WEBPACK_IMPORTED_MODULE_5__["StationComponent"] },
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

module.exports = "<body>\n<h1>LIBRANDORA!!!</h1>\n\n\n<router-outlet></router-outlet>\n</body>\n\n\n"

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
/* harmony import */ var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./playlist/playlist.component */ "./src/app/playlist/playlist.component.ts");
/* harmony import */ var _radio_radio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./radio/radio.component */ "./src/app/radio/radio.component.ts");
/* harmony import */ var _station_station_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./station/station.component */ "./src/app/station/station.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_8__["PlaylistComponent"],
                _radio_radio_component__WEBPACK_IMPORTED_MODULE_9__["RadioComponent"],
                _station_station_component__WEBPACK_IMPORTED_MODULE_10__["StationComponent"]
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

/***/ "./src/app/playlist/playlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/playlist/playlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXlsaXN0L3BsYXlsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/playlist/playlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/playlist/playlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{playlist.name}}</h2>\n<div>\n  <p id='title'>Track: {{song.title}}</p>\n  <p id='artist'>Artist: {{song.artist}}</p>\n  <p id='album'>Album: {{song.album}}</p>\n  <p id='genre'>Genre: {{song.genre}}</p>\n  <p id='rating'>Rating: {{song.rating}}</p>\n\n  <form (ngSubmit)='editsong()'>\n    Rating:<input [(ngModel)]=\"song.rating\" type='number' name='rating'>  \n    <input type='submit' value='RATE'>\n  </form>\n</div>\n<div>\n  <button (click)=\"nexttrack()\" id='next'>NEXT TRACK</button>  \n  <button (click)=\"pauseaudio()\" id='pause'>Start/Stop Music</button>\n\n</div>\n<!-- <div>\n  <h3>playlists:</h3>\n  <p *ngFor=\"let pl of playlists\"><a [routerLink]=\"['/playlist', pl.id]\">{{pl.name}}</a></p>\n</div> -->"

/***/ }),

/***/ "./src/app/playlist/playlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/playlist/playlist.component.ts ***!
  \************************************************/
/*! exports provided: PlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistComponent", function() { return PlaylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _song_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../song.service */ "./src/app/song.service.ts");




var PlaylistComponent = /** @class */ (function () {
    function PlaylistComponent(songservice, _route, _router) {
        this.songservice = songservice;
        this._route = _route;
        this._router = _router;
        this.title = 'public';
        this.song = { "id": 9709, "location": "../../music/MusicBee\\Ripped Files\\De La Soul\\And the Anonymous Nobody\\02 Royalty Capes.mp3", "album": "And the Anonymous Nobody", "source": "", "bpm": "", "compilation": "", "rating": 0, "composer": "", "copyrightdate": "", "encodedby": "", "lyricist": "", "length": "", "media": "", "mood": "", "title": "Royalty Capes", "version": "", "artist": "De La Soul", "albumartist": "De La Soul", "conductor": "", "arranger": "", "discnumber": "", "tracknumber": "2/17", "author": "", "isrc": "", "discsubtitle": "", "language": "", "genre": "Hip Hop", "date": "2016", "originaldate": "", "performer": "", "organization": "", "musicbrainz_trackid": "", "website": "", "replaygain": "", "replaygainpeak": "", "musicbrainz_artistid": "", "musicbrainz_albumid": "", "musicbrainz_albumartistid": "", "musicbrainz_trmid": "", "musicip_puid": "", "musicip_fingerprint": "", "musicbrainz_albumstatus": "", "musicbrainz_albumtype": "", "releasecountry": "", "musicbrainz_discid": "", "asin": "", "barcode": "", "catalognumber": "", "musicbrainz_releasetrackid": "", "musicbrainz_releasegroupid": "", "performer2": "", "musicbrainz_workid": "", "acoustid_fingerprint": "", "acoustid_id": "", "playbackgap": "", "comment": "", "work": "", "movement": "" };
        this.songindex = 0;
        this.playlist = { "playlist": { "id": 1, "name": "funky", "description": "testing a radio playlist", "kind": "radio" }, 'songlist': [], 'songs': {} };
        this.audio = new Audio();
    }
    PlaylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params);
            _this.songservice.playlistshow(params.pid).subscribe(function (data) {
                _this.playlist = data;
                _this.songservice.songshow(_this.playlist.songlist[0]).subscribe(function (data) {
                    _this.song = data;
                    _this.startaudio();
                });
            });
        });
    };
    PlaylistComponent.prototype.nexttrack = function () {
        var _this = this;
        this.audio.pause();
        if ((this.songindex + 1) >= (this.playlist.songlist.length)) {
            this.songindex = 0;
        }
        else {
            this.songindex++;
        }
        this.songservice.songshow(this.playlist.songlist[this.songindex]).subscribe(function (data) { _this.song = data; _this.startaudio(); });
    };
    PlaylistComponent.prototype.startaudio = function () {
        this.audio.src = this.song.location;
        this.audio.play();
    };
    PlaylistComponent.prototype.pauseaudio = function () {
        if (this.audio.paused) {
            this.audio.play();
        }
        else {
            this.audio.pause();
        }
    };
    PlaylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-playlist',
            template: __webpack_require__(/*! ./playlist.component.html */ "./src/app/playlist/playlist.component.html"),
            styles: [__webpack_require__(/*! ./playlist.component.css */ "./src/app/playlist/playlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_song_service__WEBPACK_IMPORTED_MODULE_3__["SongService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PlaylistComponent);
    return PlaylistComponent;
}());



/***/ }),

/***/ "./src/app/radio/radio.component.css":
/*!*******************************************!*\
  !*** ./src/app/radio/radio.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhZGlvL3JhZGlvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/radio/radio.component.html":
/*!********************************************!*\
  !*** ./src/app/radio/radio.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Play the Radio</h2>\n<div>\n  <p id='title'>Track: {{song.title}}</p>\n  <p id='artist'>Artist: {{song.artist}}</p>\n  <p id='album'>Album: {{song.album}}</p>\n  <p id='genre'>Genre: {{song.genre}}</p>\n  <p id='rating'>Rating: {{song.rating}}</p>\n\n  <form (ngSubmit)='editsong()'>\n    Rating:<input [(ngModel)]=\"song.rating\" type='number' name='rating'>  \n    <input type='submit' value='RATE'>\n  </form>\n</div>\n<div>\n  <button (click)=\"randomtrack()\" id='next'>RANDOM TRACK</button>  \n  <button (click)=\"pauseaudio()\" id='pause'>Start/Stop Music</button>\n\n</div>\n<div>\n  <h3>playlists:</h3>\n  <p *ngFor=\"let pl of playlists\"><a [routerLink]=\"['/playlist', pl.id]\">{{pl.name}}</a></p>\n</div>"

/***/ }),

/***/ "./src/app/radio/radio.component.ts":
/*!******************************************!*\
  !*** ./src/app/radio/radio.component.ts ***!
  \******************************************/
/*! exports provided: RadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioComponent", function() { return RadioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _song_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../song.service */ "./src/app/song.service.ts");




var RadioComponent = /** @class */ (function () {
    function RadioComponent(songservice, _route, _router) {
        this.songservice = songservice;
        this._route = _route;
        this._router = _router;
        this.title = 'public';
        this.song = { "id": 6830, "location": "../../music/iTunes\\iTunes Media\\Music\\Rise Up Singing\\Disk M_ Farm & Prairie_Mountain Voices\\34 Roll On, Columbia.m4a", "album": "['Disk M: Farm & Prairie/Mountain Voices']", "source": "", "bpm": "", "compilation": "False", "rating": 0, "composer": "", "copyrightdate": "", "encodedby": "", "lyricist": "", "length": "", "media": "", "mood": "", "title": "['Roll On, Columbia']", "version": "", "artist": "['Rise Up Singing']", "albumartist": "", "conductor": "", "arranger": "", "discnumber": "", "tracknumber": "", "author": "", "isrc": "", "discsubtitle": "", "language": "", "genre": "['Folk']", "date": "", "originaldate": "", "performer": "", "organization": "", "musicbrainz_trackid": "", "website": "", "replaygain": "", "replaygainpeak": "", "musicbrainz_artistid": "", "musicbrainz_albumid": "", "musicbrainz_albumartistid": "", "musicbrainz_trmid": "", "musicip_puid": "", "musicip_fingerprint": "", "musicbrainz_albumstatus": "", "musicbrainz_albumtype": "", "releasecountry": "", "musicbrainz_discid": "", "asin": "", "barcode": "", "catalognumber": "", "musicbrainz_releasetrackid": "", "musicbrainz_releasegroupid": "", "performer2": "", "musicbrainz_workid": "", "acoustid_fingerprint": "", "acoustid_id": "", "playbackgap": "", "comment": "", "work": "", "movement": "" };
        this.audio = new Audio();
    }
    RadioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.songservice.randomsong().subscribe(function (data) {
            _this.song = data;
            _this.startaudio();
        });
        this.songservice.playlists().subscribe(function (data) { _this.playlists = data; });
    };
    RadioComponent.prototype.randomtrack = function () {
        var _this = this;
        this.audio.pause();
        this.songservice.randomsong().subscribe(function (data) { _this.song = data; _this.startaudio(); });
    };
    RadioComponent.prototype.startaudio = function () {
        this.audio.src = this.song.location;
        this.audio.load();
        this.audio.play();
    };
    RadioComponent.prototype.pauseaudio = function () {
        if (this.audio.paused) {
            this.audio.play();
        }
        else {
            this.audio.pause();
        }
    };
    RadioComponent.prototype.editsong = function () {
        this.songservice.editsong(this.song.id, { rating: this.song.rating }).subscribe(function (data) { });
    };
    RadioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-radio',
            template: __webpack_require__(/*! ./radio.component.html */ "./src/app/radio/radio.component.html"),
            styles: [__webpack_require__(/*! ./radio.component.css */ "./src/app/radio/radio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_song_service__WEBPACK_IMPORTED_MODULE_3__["SongService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RadioComponent);
    return RadioComponent;
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
    SongService.prototype.songshow = function (sid) {
        return this._http.get('/api/song/' + sid);
    };
    SongService.prototype.randomsong = function () {
        return this._http.get('/api/randomsong');
    };
    SongService.prototype.stationnext = function (tid) {
        return this._http.get('/api/station/' + tid + '/nexttrack');
    };
    SongService.prototype.editsong = function (sid, edits) {
        return this._http.post('/api/' + sid, edits);
    };
    SongService.prototype.likesong = function (tid, sid) {
        return this._http.get('/api/station/' + tid + '/likesong/' + sid);
    };
    SongService.prototype.dislikesong = function (tid, sid) {
        return this._http.get('/api/station/' + tid + '/dislikesong/' + sid);
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpb24vc3RhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/station/station.component.html":
/*!************************************************!*\
  !*** ./src/app/station/station.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{station.station.name}}</h2>\n<div>\n  <p id='title'>Track: {{song.title}}</p>\n  <p id='artist'>Artist: {{song.artist}}</p>\n  <p id='album'>Album: {{song.album}}</p>\n  <p id='genre'>Genre: {{song.genre}}</p>\n  <p id='rating'>Rating: {{song.rating}}</p>\n\n  <form (ngSubmit)='editsong()'>\n    Rating:<input [(ngModel)]=\"song.rating\" type='number' name='rating'>  \n    <input type='submit' value='RATE'>\n  </form>\n</div>\n<div>\n  <button (click)=\"nexttrack()\" id='next'>NEXT TRACK</button>  \n  <button (click)=\"randomtrack()\" id='next'>Random</button>  \n  <button (click)=\"pauseaudio()\" id='pause'>Start/Stop Music</button>\n  <button (click)=\"likesong()\" id='pause'>LIKE</button>\n  <button (click)=\"dislikesong()\" id='pause'>DISLIKE</button>\n\n  \n</div>\n"

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
        this.title = 'public';
        this.song = { "id": 9709, "location": "../../music/MusicBee\\Ripped Files\\De La Soul\\And the Anonymous Nobody\\02 Royalty Capes.mp3", "album": "And the Anonymous Nobody", "source": "", "bpm": "", "compilation": "", "rating": 0, "composer": "", "copyrightdate": "", "encodedby": "", "lyricist": "", "length": "", "media": "", "mood": "", "title": "Royalty Capes", "version": "", "artist": "De La Soul", "albumartist": "De La Soul", "conductor": "", "arranger": "", "discnumber": "", "tracknumber": "2/17", "author": "", "isrc": "", "discsubtitle": "", "language": "", "genre": "Hip Hop", "date": "2016", "originaldate": "", "performer": "", "organization": "", "musicbrainz_trackid": "", "website": "", "replaygain": "", "replaygainpeak": "", "musicbrainz_artistid": "", "musicbrainz_albumid": "", "musicbrainz_albumartistid": "", "musicbrainz_trmid": "", "musicip_puid": "", "musicip_fingerprint": "", "musicbrainz_albumstatus": "", "musicbrainz_albumtype": "", "releasecountry": "", "musicbrainz_discid": "", "asin": "", "barcode": "", "catalognumber": "", "musicbrainz_releasetrackid": "", "musicbrainz_releasegroupid": "", "performer2": "", "musicbrainz_workid": "", "acoustid_fingerprint": "", "acoustid_id": "", "playbackgap": "", "comment": "", "work": "", "movement": "" };
        this.songindex = 0;
        this.station = { "station": { "id": 1, "name": "funky", "description": "testing a radio playlist", "kind": "radio" }, 'songlist': [], 'song': { "id": 9709, "location": "../../music/MusicBee\\Ripped Files\\De La Soul\\And the Anonymous Nobody\\02 Royalty Capes.mp3", "album": "And the Anonymous Nobody", "source": "", "bpm": "", "compilation": "", "rating": 0, "composer": "", "copyrightdate": "", "encodedby": "", "lyricist": "", "length": "", "media": "", "mood": "", "title": "Royalty Capes", "version": "", "artist": "De La Soul", "albumartist": "De La Soul", "conductor": "", "arranger": "", "discnumber": "", "tracknumber": "2/17", "author": "", "isrc": "", "discsubtitle": "", "language": "", "genre": "Hip Hop", "date": "2016", "originaldate": "", "performer": "", "organization": "", "musicbrainz_trackid": "", "website": "", "replaygain": "", "replaygainpeak": "", "musicbrainz_artistid": "", "musicbrainz_albumid": "", "musicbrainz_albumartistid": "", "musicbrainz_trmid": "", "musicip_puid": "", "musicip_fingerprint": "", "musicbrainz_albumstatus": "", "musicbrainz_albumtype": "", "releasecountry": "", "musicbrainz_discid": "", "asin": "", "barcode": "", "catalognumber": "", "musicbrainz_releasetrackid": "", "musicbrainz_releasegroupid": "", "performer2": "", "musicbrainz_workid": "", "acoustid_fingerprint": "", "acoustid_id": "", "playbackgap": "", "comment": "", "work": "", "movement": "" } };
        this.audio = new Audio();
    }
    StationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.songservice.stationshow(params.tid).subscribe(function (data) {
                _this.station = data;
                _this.song = _this.station.song;
                _this.startaudio();
            });
        });
    };
    StationComponent.prototype.startaudio = function () {
        this.audio.src = this.song.location;
        this.audio.play();
    };
    StationComponent.prototype.pauseaudio = function () {
        if (this.audio.paused) {
            this.audio.play();
        }
        else {
            this.audio.pause();
        }
    };
    StationComponent.prototype.likesong = function () {
        this.songservice.likesong(this.station.station.id, this.song.id).subscribe(function (data) { });
    };
    StationComponent.prototype.dislikesong = function () {
        this.songservice.dislikesong(this.station.station.id, this.song.id).subscribe(function (data) { });
    };
    StationComponent.prototype.randomtrack = function () {
        var _this = this;
        this.audio.pause();
        this.songservice.randomsong().subscribe(function (data) { _this.song = data; _this.startaudio(); });
    };
    StationComponent.prototype.nexttrack = function () {
        var _this = this;
        this.audio.pause();
        this.songservice.stationnext(this.station.station.id).subscribe(function (data) {
            _this.song = data;
            _this.audio.play();
        });
    };
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