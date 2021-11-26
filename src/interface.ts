interface Human {
    name: string,
    gender: string,
    occupation: string,
    likes: string[],
    dislikes: string[],
    weight: number,
    height: number,
    contact: {
        email: string,
        phone: number,
    }
}
export default Human