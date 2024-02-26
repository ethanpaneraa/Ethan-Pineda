"use client";
import { useEffect } from 'react';
import p5 from 'p5';

export default function CubeSketch() {
  useEffect(() => {

    if (typeof window === 'undefined') {
        return;
    };

    let myp5: p5;
    const sketch = (p: p5) => {
        let theta22 = 0; // Angle for Z-axis rotation
        let phi = 0; // Angle for X-axis rotation
        let psi = 0; // Angle for Y-axis rotation
        let a = 150; // Size of the cube side
        let d = 50; // Distance for perspective
    
        p.setup = function() {
            p.createCanvas(285, 285, p.WEBGL);
            p.angleMode(p.DEGREES);
        }
        p.draw = () => {
            p.background(16,16,16);
            p.rotateX(phi); 
            p.rotateY(psi);
            p.rotateZ(theta22);
            p.stroke(160, 160, 160);
            p.fill(160, 160, 160); 
    
            // Calculate vertices of the cube this needs a ts type
            let vertices: number[][] = [];
            for (let x = -1; x <= 1; x += 2) {
                for (let y = -1; y <= 1; y += 2) {
                    for (let z = -1; z <= 1; z += 2) {
                        vertices.push([x * a / 2, y * a / 2, z * a / 2]);
                    }
                }
            }
    
            // Define edges by indices of the vertices array
            let edges = [
                [0, 1], [1, 3], [3, 2], [2, 0], // Bottom face
                [4, 5], [5, 7], [7, 6], [6, 4], // Top face
                [0, 4], [1, 5], [2, 6], [3, 7]  // Vertical edges
            ];
    
            // Draw lines for edges
            edges.forEach(edge => {
                let start = vertices[edge[0]];
                let end = vertices[edge[1]];
                p.line(start[0], start[1], start[2], end[0], end[1], end[2]);
            });
    
            // Draw circles at each vertex
            p.fill(255); // White fill for circles; adjust as needed
            vertices.forEach(vertex => {
                p.push(); // Save current drawing state
                p.translate(vertex[0], vertex[1], vertex[2]);
                p.sphere(a/20); // Sphere size; adjust for visual effect
                p.pop(); // Restore drawing state
            });
    
            // Update angles for rotation
            theta22 += 1.5;
            phi += 0.4;
            psi += 0.6;
        }
    };

    const element = document.getElementById('p5-sketch');
    if (element) {
        myp5 = new p5(sketch, element);
    }; 

    return () => {
        if (myp5) {
            myp5.remove();
        }; 
    };
  }, []);

  return <div id="p5-sketch"></div>;
};