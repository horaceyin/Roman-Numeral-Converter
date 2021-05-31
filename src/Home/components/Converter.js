const Converter = () => {

    var romanToNum = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    function DecToRoman() {
        var num = document.getElementById("input_number").value;
        num = num.trim();
        num = num.toUpperCase();
        try {
            if(num === '') throw new Error('Please enter a decimal number.');
            num = Number(num);
            if(isNaN(num)) throw new Error('Please enter a vaild decimal number.');
            if(!Number.isInteger(num)) throw new Error('Please enter a non-zero positive integer.');
            if(num < 1) throw new Error('Please enter a non-zero positive integer.');
            if(num > 4999) throw new Error('Decimal number should be 1-4999');
            
            var roman = '';

            for (var key in romanToNum){
                while (num >= romanToNum[key]){
                    roman += key;
                    num -=romanToNum[key];
                }
            }
            document.getElementById('result').innerHTML = roman;
        }
        catch(error) {
            alert(error);
            document.getElementById('result').innerHTML = '';
        }
    }

    function RomanToDec(){
        var num = document.getElementById("input_number").value;
        num = num.trim();
        num = num.toUpperCase();

        var ans = 0;
        var prev = romanToNum[num[0]];

        try {
            if(num === '') throw new Error('Please enter a roman numeral.');
            if(/\d/.test(num)) throw new Error('Please enter a vaild roman numeral.');

            for(var i = 0; i < num.length; i++){
                if(!(num[i] in romanToNum)) throw new Error('The roman numeral is out of range or not vaild.');
                
                if(romanToNum[num[i]] > prev) {
                    throw new Error('The roman numeral is not vaild.');
                }else {
                    if(romanToNum[num[i]] < romanToNum[num[i+1]]){
                        ans += romanToNum[num[i+1]] - romanToNum[num[i]];
                        i++;
                        continue;
                    }else{
                        ans += romanToNum[num[i]];
                    }               
                    prev = romanToNum[num[i]];
                }
            }
            document.getElementById('result').innerHTML = ans;
        }
        catch(error){
            alert(error);
            document.getElementById('result').innerHTML = '';
        }
    }

    return <div className='my_div'>
        <h1>Roman Numeral Converter</h1>

        <div>
          <legend><span className="number">*</span> Enter either a number/roman numeral below</legend>
          <label htmlFor="input_number'">Decimal number or roman numeral:</label>
          <input type='text' id='input_number' name='input_number' style={{textTransform:'uppercase'}}/>

          <label>Results:</label>
          <p className='item' id='result'></p>
        </div>

        <button type="submit" onClick={DecToRoman}>Decimal convert to roman</button>
        <button type="submit" onClick={RomanToDec}>Roman convert to decimal</button>

        <h4>@2021 Wong Ho Yin Horace</h4>

    </div>
}

export default Converter