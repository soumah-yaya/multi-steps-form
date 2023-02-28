// capitalize the first character of a string
export const captalizeFisrtCharacter = (str) => {
        return str.at(0).toUpperCase() + str.slice(1);
    }

export const CalculateTotal = (plan, addon)=>{
        return plan.value + Object.values(addon).reduce((a, b) => a + b, 0)
    }