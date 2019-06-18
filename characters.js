class Personnage {
  constructor(nom, couleur, hauteurSaut) {
    this.nom = nom;
    this.couleur = couleur;
    this.hauteurSaut = hauteurSaut;
    this.vies = 3; // Tous les personnages auront toujours 3 vies

  }

  // Fait apparaître le personnage
  apparaitre() {
    let sprite = document.getElementById(this.nom);
    sprite.style.display = "block";
  }

  sauter() {
    let sprite = document.getElementById(this.nom);
    let style = window.getComputedStyle(sprite);
    const x = style.getPropertyValue('top');
    const intX = parseInt(x);

      const monter = () => {
        sprite.style.top = intX - this.hauteurSaut + "px";
        sprite.style.transition = "top 0.1s ease-out";
      };

      const descendre = () => {
        sprite.style.top = intX + "px";
        sprite.style.transition = "top 0.1s ease-out";
      };

    setTimeout(monter,0);
    setTimeout(descendre, 100);
    
  }
}

const mario = new Personnage("mario", "rouge", 60);
const luigi = new Personnage("luigi", "vert", 200);


document.querySelector("#displayMario").addEventListener("click", function () {
  mario.apparaitre();
});
document.querySelector("#displayBoth").addEventListener("click", function () {
  mario.apparaitre();
  luigi.apparaitre();
});

document.querySelector("#sautMario").addEventListener("click", function () {
  mario.sauter();
});

document.querySelector("#sautLuigi").addEventListener("click", function () {
  luigi.sauter();
});