import { IQuery } from "../share-module/iquery"
import { AgreementDescription } from "./model/agreement-description";
import {Component, Input, OnInit} from "@angular/core";
import { agreementsList } from "./mock/agreement-list";

export class NameFilter implements IQuery
{
    constructor(public query: string)
    {
        
    }
    
    process(agreements: AgreementDescription[]): AgreementDescription[] {
         return agreements.filter(agreement => agreement.name === this.query)
    }
    

    ngOnInit(): void {
        this.process(agreementsList);
    }
}