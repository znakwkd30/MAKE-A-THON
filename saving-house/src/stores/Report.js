import { observable, action, configure } from 'mobx';
import axios from 'axios';

configure({enforceActions: "observed"});

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhYSIsImlhdCI6MTU3MjYwOTMzMCwiZXhwIjoxNTc3NzkzMzMwLCJpc3MiOiJER1NXLkhTLktSIiwic3ViIjoidG9rZW4ifQ.x94hZza_gRizzxpgr9jSuMziIS133XVkwVWMhTRwhxE";

export default class Report {
    @observable report = [];

    @action setReport = (reports) => {this.report = [...reports]}

    @action async getReport() {
        try{
            let result = await axios({
                url: "http://172.16.10.9:3002/api/report",
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": true,
                    "token": `${token}`,
                },
            });
            console.log(result);
            this.setReport(result.data);
        }catch(error) {
            console.log(error);
        }
    }
}