/**
 *  https://w3c.github.io/webappsec-csp/#directives-fetch
 */

import type { SerializedDirective } from './serialize.js';

/**
 *  - https://w3c.github.io/webappsec-csp/#directive-child-src
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/child-src
 */
export const DIRECTIVE_CHILD_SRC = 'child-src';
export type ChildSrcDirective = SerializedDirective<typeof DIRECTIVE_CHILD_SRC>;

/**
 *  - https://w3c.github.io/webappsec-csp/#directive-connect-src
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/connect-src
 */
export const DIRECTIVE_CONNECT_SRC = 'connect-src';
export type ConnectSrcDirective = SerializedDirective<typeof DIRECTIVE_CONNECT_SRC>;

/**
 *  - https://w3c.github.io/webappsec-csp/#default-src
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/default-src
 */
export const DIRECTIVE_DEFAULT_SRC = 'default-src';
export type DefaultSrcDirective = SerializedDirective<typeof DIRECTIVE_DEFAULT_SRC>;

/**
 *  - https://w3c.github.io/webappsec-csp/#directive-font-src
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src
 */
export const DIRECTIVE_FONT_SRC = 'font-src';
export type FontSrcDirective = SerializedDirective<typeof DIRECTIVE_FONT_SRC>;

/**
 *  - https://w3c.github.io/webappsec-csp/#directive-frame-src
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-src
 */
export const DIRECTIVE_FRAME_SRC = 'frame-src';
export type FrameSrcDirective = SerializedDirective<typeof DIRECTIVE_FRAME_SRC>;

/**
 *  - https://w3c.github.io/webappsec-csp/#directive-img-src
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/img-src
 */
export const DIRECTIVE_IMG_SRC = 'img-src';
export type ImgSrcDirective = SerializedDirective<typeof DIRECTIVE_IMG_SRC>;

/**
 *  - https://w3c.github.io/webappsec-csp/#directive-manifest-src
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/manifest-src
 */
export const DIRECTIVE_MANIFEST_SRC = 'manifest-src';
export type ManifestSrcDirective = SerializedDirective<typeof DIRECTIVE_MANIFEST_SRC>;

/**
 *  - https://w3c.github.io/webappsec-csp/#directive-media-src
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/media-src
 */
export const DIRECTIVE_MEDIA_SRC = 'media-src';
export type MediaSrcDirective = SerializedDirective<typeof DIRECTIVE_MEDIA_SRC>;

/**
 *  - https://w3c.github.io/webappsec-csp/#directive-object-src
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/object-src
 */
export const DIRECTIVE_OBJECT_SRC = 'object-src';
export type ObjectSrcDirective = SerializedDirective<typeof DIRECTIVE_OBJECT_SRC>;

/**
 *  - https://w3c.github.io/webappsec-csp/#directive-prefetch-src
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/prefetch-src
 */
export const DIRECTIVE_PREFETCH_SRC = 'prefetch-src';
export type PrefetchSrcDirective = SerializedDirective<typeof DIRECTIVE_PREFETCH_SRC>;

/**
 *  - https://w3c.github.io/webappsec-csp/#directive-script-src
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src
 */
export const DIRECTIVE_SCRIPT_SRC = 'script-src';
export type ScriptSrcDirective = SerializedDirective<typeof DIRECTIVE_SCRIPT_SRC>;

/**
 *  - https://w3c.github.io/webappsec-csp/#directive-script-src-attr
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src-attr
 */
export const DIRECTIVE_SCRIPT_SRC_ATTR = 'script-src-attr';
export type ScriptSrcAttrDirective = SerializedDirective<typeof DIRECTIVE_SCRIPT_SRC_ATTR>;

/**
 *  - https://w3c.github.io/webappsec-csp/#directive-script-src-elem
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src-elem
 */
export const DIRECTIVE_SCRIPT_SRC_ELEM = 'script-src-elem';
export type ScriptSrcElemDirective = SerializedDirective<typeof DIRECTIVE_SCRIPT_SRC_ELEM>;

/**
 *  - https://w3c.github.io/webappsec-csp/#directive-style-src
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src
 */
export const DIRECTIVE_STYLE_SRC = 'style-src';
export type StyleSrcDirective = SerializedDirective<typeof DIRECTIVE_STYLE_SRC>;

/**
 *  - https://w3c.github.io/webappsec-csp/#directive-style-src-attr
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src-attr
 */
export const DIRECTIVE_STYLE_SRC_ATTR = 'style-src-attr';
export type StyleSrcAttrDirective = SerializedDirective<typeof DIRECTIVE_STYLE_SRC_ATTR>;

/**
 *  - https://w3c.github.io/webappsec-csp/#directive-style-src-elem
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src-elem
 */
export const DIRECTIVE_STYLE_SRC_ELEM = 'style-src-elem';
export type StyleSrcElemDirective = SerializedDirective<typeof DIRECTIVE_STYLE_SRC_ELEM>;
