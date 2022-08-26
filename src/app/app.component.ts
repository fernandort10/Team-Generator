import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'testapp';
  errMessage = '';
  newMember = '';
  members: string[] = [];
  teams: string[][] = []
  numberOfTeams: number | "" = "";

  onInput(member: string) {
    this.newMember = member;
  }

  addMember() {
    if (!this.newMember) {
      this.errMessage = 'Name cant be empty';
      return;
    }

    this.members.push(this.newMember);
    this.newMember = '';
    this.errMessage = '';
  }

  onNumberOfTeamsInput(value:string){
    this.numberOfTeams = Number(value);

  }

  generateTeam(){

    if(!this.numberOfTeams || this.numberOfTeams <= 0){
      this.errMessage = "Invalid number"
      return
    }

    if(this.members.length < this.numberOfTeams){
      this.errMessage = "Not enough members"
      return
    }

    this.errMessage = " "
    const allMembers = [...this.members]
    
    while(allMembers.length){
      for(let i=0; i<this.numberOfTeams; i++){
        const randomIndex = Math.floor(Math.random() * allMembers.length)
        const member = allMembers.splice(randomIndex,1)[0]
        if(!member){break}
        if(this.teams[i]){
          this.teams[i].push(member)
  
        }
        else{
          this.teams[i] = [member]
        }
      }
  
    }
    this.members = []
    this.numberOfTeams = ""
  }

  refreshPage(){
    window.location.reload();
  }
}
