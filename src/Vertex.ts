import { Vector3f } from './math';

export class TextureCoordinate {
    public u: number;
    public v: number;
}

export class Vertex {
    public position: Vector3f;
    public textureCoordinate: TextureCoordinate;
}