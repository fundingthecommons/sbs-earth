import { useRef, useEffect, useState } from 'react'
import { Stage, useApp, SimpleMesh } from '@pixi/react'
import * as PIXI from 'pixi.js';

const w = 1800;
const h = 948;

const WarpedImage = ({
  image=""
}) => {

  const [count, setCount] = useState(0);
  const app = useApp();
  const indices = useRef(
    new Uint16Array([
      0, 3, 4,
      0, 1, 4,
      1, 2, 4,
      2, 4, 5,
      3, 4, 6,
      4, 6, 7,
      4, 7, 8,
      4, 5, 8,
    ])
  ).current;
  const uvs = useRef(
    new Float32Array([
      0, 0, 0.5, 0, 1, 0,
      0, 0.5, 0.5, 0.5, 1, 0.5,
      0, 1, 0.5, 1, 1, 1,
    ])
  ).current;
  const vertices = useRef(
    new Float32Array([
      0, 0, w / 2, 0, w, 0,
      0, h / 2, w / 2, h / 2, w, h / 2,
      0, h, w / 2, h, w, h,
    ])
  ).current;

  useEffect(() => {
    const ticker = app.ticker;

    const tick = (delta) => {
      setCount((prevCount) => prevCount + 0.008 * delta);

      const updatedVertices = new Float32Array(vertices);
      updatedVertices[8] = w / 2 + Math.sin(count) * 100;
      updatedVertices[9] = h / 2 + Math.cos(count) * 50 - 50;

      vertices.set(updatedVertices);
    };

    ticker.add(tick);

    return () => {
      ticker.remove(tick);
    };
  }, [app.ticker, count, vertices]);

  return (
    <SimpleMesh
      image={image}
      uvs={uvs}
      vertices={vertices}
      indices={indices}
      drawMode={PIXI.DRAW_MODES.TRIANGLES}
    />
  );
};

export default function BackgroundWarp({
  image=""
}) {
  return (
    <Stage width={w} height={h} options={{ autoDensity: true }}>
      <WarpedImage image={image} />
    </Stage>
  );
}
