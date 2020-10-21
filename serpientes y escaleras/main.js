class Dado{
    dados(){
        return Math.ceil(Math.random()*6)
    }
}

class Jugador{
    constructor(nombre){
        this.nombre = nombre
        this.tiros = 0
        this.recorrido = 0
    }

    tirarDado(){
        let dado = new Dado()
        return this.recorrido += dado.dados()
    }
}

class Tablero{
    constructor(){
        this.casillas = []
        this.meta = 100
    }

    rellenar(){
        let i = 1
        while(i<=100){

            //ESCALERAS

        if(i == 5){
            this.casillas[i] = 35
        }else if(i == 17){
            this.casillas[i] = 38
        }else if(i == 28){
            this.casillas[i] = 57
        }else if(i == 39){
            this.casillas[i] = 75
        }else if(i == 43){
            this.casillas[i] = 80
        }else if(i == 50){
            this.casillas[i] = 69
        }else if(i == 55){
            this.casillas[i] = 75
        }else if(i == 65){
            this.casillas[i] = 95

            //SERPIENTES

        }else if(i == 70){
            this.casillas[i] = 45
        }else if(i == 78){
            this.casillas[i] = 64
        }else if(i == 85){
            this.casillas[i] = 54
        }else if(i == 88){
            this.casillas[i] = 12
        }else if(i == 99){
            this.casillas[i] = 34
        }else{
            this.casillas[i] = i
        }
            i = i+1
        }
    }
        
    revisarCasilla(casilla){
        return this.casillas[casilla]
    }

    verTablero(){
        console.log(this.casillas)
    }
}

class Juego{
    constructor(){
        this.jugadores = []
        this.tablero = new Tablero()
        this.tablero.rellenar()
    }

    agregarJugador(jugador){
        this.jugadores.push(jugador)
    }

    iniciar(){
        let terminar = false
        let numJugadores = this.jugadores.length
        while(terminar == false){
            let i = 0
            while(i<numJugadores && terminar == false){
                let turno = this.jugadores[i].tirarDado()
                this.jugadores[i].tiros += 1
                if (turno<100){
                    this.jugadores[i].recorrido = this.tablero.revisarCasilla(turno)
                }else{
                    terminar = true
                    console.log("¡ Ganaste", this.jugadores[i].nombre, "!")
                }
                i++
            }
        }
    }

    mostrarJugadores(){
        console.log("Información de los jugadores")
        console.log(this.jugadores)
    }

    mostrarJugador(jugador){
        console.log(this.jugadores[jugador])
    }
}

let juego = new Juego()
let j1 = new Jugador("Vanessa")
let j2 = new Jugador("Brandon")
juego.agregarJugador(j1)
juego.agregarJugador(j2)
juego.iniciar()
juego.mostrarJugadores()