let choice = prompt("Generate OTP? (yes/no)");

if (choice.toLowerCase() === "yes") {

    let otp = "";

    for (let i = 0; i < 6; i++) {
        let digit = Math.floor(Math.random() * 10);
        otp += digit;
    }

    console.log("Your OTP is:", otp);

} else {
    console.log("OTP generation cancelled.");
}