class Gradient {
    constructor() {
      this.canvas = document.getElementById("gradient-canvas");
      this.gl = this.canvas.getContext("webgl");
      this.init();
    }
  
    init() {
      this.resizeCanvas();
      window.addEventListener("resize", () => this.resizeCanvas());
  
      // Colores adaptados a tu paleta
      const colors = [
        [245 / 255, 239 / 255, 255 / 255], // $color-lightest
        [229 / 255, 217 / 255, 242 / 255], // $color-light
        [157 / 255, 80 / 255, 187 / 255],  // $color-mauve
        [110 / 255, 72 / 255, 170 / 255],  // $color-primary
      ];
  
      this.startAnimation(colors);
    }
  
    resizeCanvas() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }

    
  
    startAnimation(colors) {
      const gl = this.gl;
      const vertexShaderSource = `
        attribute vec2 a_position;
        varying vec2 v_uv;
  
        void main() {
          v_uv = a_position * 0.5 + 0.5;
          gl_Position = vec4(a_position, 0, 1);
        }
      `;
  
      const fragmentShaderSource = `
        precision highp float;
        varying vec2 v_uv;
  
        uniform float u_time;
        uniform vec3 u_colors[4];
  
        void main() {
          vec2 uv = v_uv + vec2(u_time * 0.1, u_time * 0.05);
          //onda1 
          float wave = sin(v_uv.y * 10.0 + u_time * 2.0) * 0.5 + 0.5;
          vec3 color = mix(u_colors[0], u_colors[1], wave);
          //onda2
          wave = sin(v_uv.y * 15.0 - u_time * 1.5) * 0.5 + 0.5;
          color = mix(color, u_colors[2], wave);
  
          wave = sin(v_uv.y * 20.0 + u_time * 1.0) * 0.5 + 0.5;
          color = mix(color, u_colors[3], wave);
          
          gl_FragColor = vec4(color, 1.0);
        }
      `;
  
      const program = this.createProgram(vertexShaderSource, fragmentShaderSource);
  
      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([
          -1, -1,
          1, -1,
          -1, 1,
          -1, 1,
          1, -1,
          1, 1,
        ]),
        gl.STATIC_DRAW
      );
  
      const positionLocation = gl.getAttribLocation(program, "a_position");
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
  
      const colorsLocation = gl.getUniformLocation(program, "u_colors");
      const timeLocation = gl.getUniformLocation(program, "u_time");
  
      gl.useProgram(program);
      gl.uniform3fv(colorsLocation, colors.flat());
  
      const render = (time) => {
        gl.uniform1f(timeLocation, time * 0.001);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        requestAnimationFrame(render);
      };
  
      render(0);
    }
  
    createProgram(vertexSource, fragmentSource) {
      const gl = this.gl;
  
      const vertexShader = this.createShader(gl.VERTEX_SHADER, vertexSource);
      const fragmentShader = this.createShader(gl.FRAGMENT_SHADER, fragmentSource);
  
      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
  
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
      }
  
      return program;
    }
  
    createShader(type, source) {
      const gl = this.gl;
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
  
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
      }
  
      return shader;
    }
  }
  
  new Gradient();
  // funcion que aplica las animaciones en las habiliades  
  function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
        
    }
  }
  
  
  //detecto el scrolling para aplicar la animacion de la barra de habilidades
  window.onscroll = function(){
    efectoHabilidades();
  } 
  document.getElementById("downloadCv").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "img/cv/cv.pdf"; // Ruta del archivo
  link.download = "cv.pdf"; // Nombre del archivo descargado
  link.click();
});
  
