class Customer {
    constructor(name, address, dateOfBirth, account) {
        this.name = name;        
        this.address = address;
        this.dateOfBirth = dateOfBirth;
        this.account = account;
    }

    getName() {
        return this.name;
    }

    getAddress() {
        return this.address;
    }

    setAddress(address) {
        this.address = address;
    }

    getAge() {
        const dob = new Date(this.dateOfBirth);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        return age;
    }
}