
interface BitmapCharRec {
	width: number;
	height: number;
	xorig: number;
	yorig: number;
	advance: number;
	bitmap: string;
}
declare var BitmapCharRec: BitmapCharRec;

interface BitmapFontRec {
	name: string;
	num_chars: number;
	first: number;
	ch: BitmapCharRec;
}
declare var BitmapFontRec: BitmapFontRec;

interface CoordRec {
	x: number;
	y: number;
}
declare var CoordRec: CoordRec;

declare const SMAP_BACK: number;

declare const SMAP_BOTTOM: number;

declare const SMAP_FRONT: number;

declare const SMAP_LEFT: number;

declare const SMAP_RIGHT: number;

declare const SMAP_TOP: number;

interface STXY {
	s: number;
	t: number;
	x: number;
	y: number;
}
declare var STXY: STXY;

enum SphereMapFlags {

	MAP_CLEAR_SMAP_TEXTURE = 1,

	MAP_GENERATE_VIEW_MIPMAPS = 2,

	MAP_GENERATE_SMAP_MIPMAPS = 4,

	MAP_GENERATE_MIPMAPS = 6
}


interface SphereMapMesh {
	refcnt: number;
	steps: number;
	rings: number;
	edgeExtend: number;
	face: STXY;
	back: STXY;
}
declare var SphereMapMesh: SphereMapMesh;

interface StrokeCharRec {
	num_strokes: number;
	stroke: StrokeRec;
	center: number;
	right: number;
}
declare var StrokeCharRec: StrokeCharRec;

interface StrokeFontRec {
	name: string;
	num_chars: number;
	ch: StrokeCharRec;
	top: number;
	bottom: number;
}
declare var StrokeFontRec: StrokeFontRec;

interface StrokeRec {
	num_coords: number;
	coord: CoordRec;
}
declare var StrokeRec: StrokeRec;

declare const X: number;

declare const Y: number;

declare const Z: number;

interface gleGC {
	bgn_gen_texture: (p1: number, p2: number) => void;
	n3f_gen_texture: (p1: number) => void;
	n3d_gen_texture: (p1: number) => void;
	v3f_gen_texture: (p1: number, p2: number, p3: number) => void;
	v3d_gen_texture: (p1: number, p2: number, p3: number) => void;
	end_gen_texture: () => void;
	join_style: number;
	ncp: number;
	contour: number;
	cont_normal: number;
	up: number;
	npoints: number;
	point_array: number;
	color_array: number;
	xform_array: number;
	num_vert: number;
	segment_number: number;
	segment_length: number;
	accum_seg_len: number;
	prev_x: number;
	prev_y: number;
	save_bgn_gen_texture: (p1: number, p2: number) => void;
	save_n3f_gen_texture: (p1: number) => void;
	save_n3d_gen_texture: (p1: number) => void;
	save_v3f_gen_texture: (p1: number, p2: number, p3: number) => void;
	save_v3d_gen_texture: (p1: number, p2: number, p3: number) => void;
	save_end_gen_texture: () => void;
}
declare var gleGC: gleGC;

declare var glutBitmap8By13: any;

declare var glutBitmap9By15: any;

declare var glutBitmapHelvetica10: any;

declare var glutBitmapHelvetica12: any;

declare var glutBitmapHelvetica18: any;

declare var glutBitmapTimesRoman10: any;

declare var glutBitmapTimesRoman24: any;

declare var glutStrokeMonoRoman: any;

declare var glutStrokeRoman: any;
