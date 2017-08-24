import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { RestService } from './rest.service';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

	constructor(private restService: RestService) { }

	setHeader(): RequestOptions {
		let headers = new Headers({
			'Content-Type': 'application/json',
			'X-DreamFactory-Api-Key': '36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88'
		});
		let options = new RequestOptions({ headers: headers });
		return options;
	}

	getAuthenticate(form: any) {
		return this.restService.post('https://ft-anitrai011.vz2.dreamfactory.com/api/v2/system/admin/session', form, this.setHeader())
			.map(res => res)
	}
}
