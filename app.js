const jwt = require("jsonwebtoken");

const token = jwt.sign(
    { myPayloadData: 1234 }, // jwt를 이용해서 payload 설정하는 부분 
    "mysecretkey", // jwt를 이용해서 암호화를 하기 위한 비밀키
    {
        expiresIn: new Date().getMinutes() + 1
    }
    );
// console.log(token);

const decodeToken = jwt.decode(token); // jwt의 payload 확인하기 위해 사용
// console.log(decodeToken);

const verifyToken = jwt.verify(token, "mysecretkey");
console.log(verifyToken);