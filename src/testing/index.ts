export default function main() {
    /* eslint-disable */

    // Variables
    //          optional
    const hello: string = "Hello"

    // Functions                                     optional
    const getName = (name: string, lastname: string): string => name + " " + lastname

    // Generics
    const last = <T>(arr: T[]): T => {
        return arr[arr.length - 1]
    }

    const numbers: number[] = [1, 2, 3, 4]
    const words: string[] = ["hello", "world", "foo", "bar"]
    // Also called tuple
    const unions: (string | number)[] = ["hello", "world", "foo", 2]

    const makeName = <T extends { firstname: string, lastname: string }>(person: T) => {
        return {
            ...person,
            name: person.firstname + " " + person.lastname
        }
    }
    const natiq = makeName({ firstname: "Natiq", lastname: "Khan", age: 20, hobby: "Web" })

    // interface
    interface Person1<T> {
        firstname: string,
        lastname: string,
        // hobbies can be a string or array of strings
        hobbies: T,
    }

    type natiq = Person1<string>
    type ali = Person1<Array<string>>
    // type natiq2 = {
    //     firstname: string,
    //     lastname: string,
    //     hobbies: string,
    // } type natiq2 is same as natiq

    const aliObj: ali = {
        firstname: "Ali",
        lastname: "Abdaal",
        hobbies: ["football", "baseball"]
    }




    // types
    type Person2<T> = {
        name: string,
        last: string,
    } & { hobbies: T, }

    const me: Person2<string> = {
        name: "natiq",
        last: "khan",
        hobbies: "foo"
    }

}