

const CheckField = (type, value) => {

    switch(type) {
        case "text":
            if(value === "") return false;
            return true;
        
        case "email":
            return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(value)
        
        case "phone":
            return (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g).test(value)

        case "number":
            return (/^\d+$/).test(value);
        default:
            return true;
    }
}

export default CheckField;