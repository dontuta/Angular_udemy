import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/';


@Injectable()
export class GiphySearchService {

    constructor(private http: Http) {}

    pesquisarGiphy(limit: string, term: string): Observable<Response> {
        const url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=YLXQLDZMCqm5yCypoRfvnUqO6qD9XN78&limit=' + limit ;
        return this.http.get(url);
    }
}