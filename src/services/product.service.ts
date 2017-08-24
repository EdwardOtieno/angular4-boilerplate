import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { RestService } from './rest.service';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

	constructor(private restService: RestService) { }

	setHeader(): RequestOptions {
		let headers = new Headers({
			'Content-Type': 'application/json',
			'X-DreamFactory-Api-Key': '36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
			'X-DreamFactory-Session-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsInVzZXJfaWQiOjEsImVtYWlsIjoiYW5pdHJhaTAxMUBnbWFpbC5jb20iLCJmb3JldmVyIjpmYWxzZSwiaXNzIjoiaHR0cHM6XC9cL2Z0LWFuaXRyYWkwMTEudnoyLmRyZWFtZmFjdG9yeS5jb21cL2FwaVwvdjJcL3N5c3RlbVwvYWRtaW5cL3Nlc3Npb24iLCJpYXQiOjE0OTM3OTM0MTAsImV4cCI6MTQ5Mzc5NzAxMCwibmJmIjoxNDkzNzkzNDEwLCJqdGkiOiJhZmU1NDY4N2ZiM2JlMzMwYTU0ZDgwNDZmOTcyNjJmNyJ9.RHlk1geydJ882dIl9iUhjVpAmGpAZ96GbDjUKACH4Yo'
		});
		let options = new RequestOptions({ headers: headers });
		return options;
	}

	addProduct(product: any) {

		let body = {
			"resource": [
				{
					"description": product.description,
					"category": "mobile",
					"price": product.price,
					"title": product.title,
					"available": product.available
				}
			]
		}
		return this.restService.post('https://ft-anitrai011.vz2.dreamfactory.com/api/v2/db/_table/Product', body, this.setHeader())
			.map(res => res)
	}
	getAllProducts() {
		return this.restService.get('https://ft-anitrai011.vz2.dreamfactory.com/api/v2/db/_table/Product', this.setHeader())
			.map(res => res)
	}
	updateProductDetail(product: any) {
		let body = {
			"resource": [
				{
					"id": product.id,
					"description": product.description,
					"category": "mobile",
					"price": product.price,
					"title": product.title,
					"available": product.available
				}
			]
		}
		return this.restService.patch('https://ft-anitrai011.vz2.dreamfactory.com/api/v2/db/_table/Product', this.setHeader())
			.map(res => res)
	}
}
