// ##################### Declarando this em uma Função #####################

const user = {
    id: 123,
    admin: false,

    adicionaAdmin: function () {
        this.admin = true;
    }
}

interface DB {
    filterUsers(filter: (this: User) => boolean): User[];
}

class User{
    public admin: boolean = false;
}

class Banco implements DB {
    filterUsers(filter: (this: User) => boolean): User[] {
        return [];
    }
} 

function getDB() {
    return new Banco();
}

const db = getDB();

const admins = db.filterUsers(function (this: User) {
    return this.admin;
});
  