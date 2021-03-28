import Actor from "./Actor";
interface Collidable {
  display(a: Actor): void;
  public didCollide() {

  }
}
export default Collidable;