let _angle1 = 20;
let _angle2 = 90;
let _angle3 = 70;
if (_angle1 > 0 && _angle2 > 0 && _angle3 > 0) {
  if (_angle1 + _angle2 > _angle3 && _angle1 + _angle2 + _angle3 === 180) {
    console.log("É um triângulo? " + true);
  } else if (
    _angle2 + _angle3 > _angle1 &&
    _angle1 + _angle2 + _angle3 === 180
  ) {
    console.log("É um triângulo? " + true);
  } else if (
    _angle3 + _angle1 > _angle2 &&
    _angle1 + _angle2 + _angle3 === 180
  ) {
    console.log("É um triângulo? " + true);
  } else {
    console.log("É um triângulo? " + false);
  }
} else {
  console.log("Algum triângulo é inválido.");
}
