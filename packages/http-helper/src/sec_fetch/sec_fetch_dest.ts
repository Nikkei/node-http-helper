//  @see
//  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest
//  - https://w3c.github.io/webappsec-fetch-metadata/#sec-fetch-dest-header
//  - https://fetch.spec.whatwg.org/#concept-request-destination
//  - https://fetch.spec.whatwg.org/#destination-table

export const EMPTY_STRING = '';

export const AUDIO = 'audio' as const;
export const AUDIO_WORKLET = 'audioworklet' as const;
export const DOCUMENT = 'document' as const;
export const EMBED = 'embed' as const;
export const FONT = 'font' as const;
export const FRAME = 'frame' as const;
export const IFRAME = 'iframe' as const;
export const IMAGE = 'image' as const;
export const MANIFEST = 'manifest' as const;
export const OBJECT = 'object' as const;
export const PAINT_WORKLET = 'paintworklet' as const;
export const REPORT = 'report' as const;
export const SCRIPT = 'script' as const;
export const SERVICE_WORKER = 'serviceworker' as const;
export const SHARED_WORKER = 'sharedworker' as const;
export const STYLE = 'style' as const;
export const TRACK = 'track' as const;
export const VIDEO = 'video' as const;
export const WEB_IDENTITY = 'webidentity' as const;
export const WORKER = 'worker' as const;
export const XSLT = 'xslt' as const;
