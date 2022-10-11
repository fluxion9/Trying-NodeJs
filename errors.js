function divide(num1, num2)
{
    if(num2 == 0)
    {
        throw new Error("Cannot divide by 0");
    }
    return num1 / num2;
}

try {
    console.log(divide(1, 0));

} catch (e) {
    console.log('cannot divde by zero, change denominator');
}