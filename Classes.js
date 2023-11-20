"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const db_1 = __importDefault(require("./db"));
class Person {
    constructor(name, password) {
        this.name = name;
        this.password = password;
        this.total_value = 0;
    }
    insertDatabase() {
        db_1.default.execute(`INSERT INTO user_info(name_user, password_user, total_value) VALUES (?, ?, ?)`, [this.name, this.password, this.total_value]);
    }
    deposit(depositValue) {
        this.total_value += depositValue;
        db_1.default.execute(`UPDATE user_info SET total_value = total_value + ? WHERE name_user = ?`, (this.total_value, this.name));
    }
    cashWithdraw(withdraw) {
        if (withdraw > this.total_value) {
            console.log("Dinheiro insuficiente em conta");
        }
        else {
            this.total_value -= withdraw;
            db_1.default.execute(`UPDATE user_info SET total_value = total_value + ? WHERE name_user = ?`, (this.total_value, this.name));
        }
    }
    checkStatement() {
        const bankStatement = db_1.default.execute(`SELECT total_value FROM user_info`);
        console.log(bankStatement);
    }
}
exports.Person = Person;
