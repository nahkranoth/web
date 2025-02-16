const vertex = `
precision highp float;
precision highp int;
attribute vec2 uv;
attribute vec3 position;
attribute vec3 normal;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragment = `
precision highp float;
precision highp int;
uniform sampler2D tMap;
varying vec2 vUv;

void main() {
    vec4 tex = texture2D(tMap, vUv);
    gl_FragColor.rgba = tex;
}
`;

export default {vertex, fragment};
