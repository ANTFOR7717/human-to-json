import Human from "./src/interface";

class HumanMaker {
    static create(event: Human) {
        return {
            name: event.name,
            gender: event.gender,
            occupation: event.occupation,
            likes: event.likes,
            dislikes: event.dislikes,
            weight: event.weight,
            height: event.height,
            contact: {
                email: event.contact.email,
                phone: event.contact.phone
            }
        }
    }

}

export class MetricToImperial {

    static kgToLb(kg: number): number {
        return Math.floor(kg * 2.2)
    }

    static lbToKg(lb: number): number {
        return Math.floor(lb / 2.2)
    }

    static cmToFtIn(cm: number): number {
        let output = cm / 30.48
        return Math.floor(output)
    }

    static ftInToCm(ft: number): number {
        return ft * 30.48

    }
}


const anthony = HumanMaker.create({
    name: 'Anthony',
    gender: 'Male',
    occupation: 'Software Engineer',
    likes: ['food', 'drink'],
    dislikes: ['sugar', 'alcohol'],
    weight: 142,
    height: 80,
    contact: {
        email: 'anthonyforest@gmail.com',
        phone: 2404167902
    }
});

console.log(anthony)

// TODO: Add MongoDB
// TODO: Add height conversion (cm <--> ft' inches")
// TODO: Add weight conversion (kg <--> lb)