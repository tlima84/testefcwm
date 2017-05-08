import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class Lista extends Component{

	constructor(){
		super();
		this.state = {listaElliot:[]};
	}

	componentDidMount(){
		fetch('http://localhost:3021/listaElliot')
		.then( response => response.json())
		.then( listaElliot => {
			this.setState({listaElliot:listaElliot});
		});
	}

	render(){
		return (

			<div className="table">
				<div>
					<h2>      Fsociety List</h2>
				</div>
				<Table>
					<TableHeader displaySelectAll={false}>						
						<TableRow>
							<TableHeaderColumn tooltip="PPL">PPL</TableHeaderColumn>
							<TableHeaderColumn tooltip="PPL">Description</TableHeaderColumn>
							<TableHeaderColumn tooltip="PPL">Fsociety?</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody displayRowCheckbox={false}>
						{
							this.state.listaElliot.map((pessoa, index) => {
								return(
								<TableRow key={index}>
									<TableRowColumn>{pessoa.nome}</TableRowColumn>
									<TableRowColumn>{pessoa.descricao}</TableRowColumn>
									<TableRowColumn>{pessoa.fsociety}</TableRowColumn>
								</TableRow>
								)
							})
						}
					</TableBody>
				</Table>
			</div>


		);
	}
}