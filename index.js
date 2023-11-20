"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menu = void 0;
const Classes_1 = require("./Classes");
const leitor = __importStar(require("readline-sync"));
let account = false;
let nameUser = "";
let newPassword = "";
let userAccount = null;
function menu() {
    console.log("Banco SENAC: \n");
    console.log("1 - Deposito");
    console.log("2 - Saque");
    console.log("3 - Verificar Banco");
    console.log("4 - Criar Conta");
    console.log("5 - Sair");
    let op = leitor.questionInt("Informe a opção desejada: ");
    switch (op) {
        case 1:
            if (userAccount instanceof Classes_1.Person) {
                let depositValue = leitor.questionFloat("Informe o valor do depósito: ");
                userAccount.deposit(depositValue);
            }
            else {
                console.error("Erro! Não tem conta no banco");
            }
            menu();
            break;
        case 2:
            if (userAccount instanceof Classes_1.Person) {
                const withdraw = leitor.questionFloat("Insira o valor do saque: ");
                userAccount.cashWithdraw(withdraw);
            }
            else {
                console.error("Erro! Não tem conta no banco");
                menu();
            }
            menu();
            break;
        case 3:
            if (userAccount instanceof Classes_1.Person) {
                userAccount.checkStatement();
            }
            else {
                console.error("Erro! Não tem conta no banco");
                menu();
            }
        case 4:
            if (account === true) {
                console.log("Você já tem uma conta!");
            }
            else {
                const user = leitor.question("Insira seu nome: ");
                const passwordUser = leitor.question("Insira sua senha: ");
                nameUser = user;
                newPassword = passwordUser;
                userAccount = new Classes_1.Person(nameUser, newPassword);
                userAccount.insertDatabase();
                account = true;
            }
            menu();
            break;
        case 5:
            console.log("Saindo...");
            break;
    }
}
exports.menu = menu;
menu();
