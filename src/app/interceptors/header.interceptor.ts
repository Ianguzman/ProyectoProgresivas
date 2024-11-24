import { HttpRequest,HttpInterceptor,HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HeadersInterceptor implements HttpInterceptor{



    intercept(req: HttpRequest<any>, next: HttpHandler){

        let language = localStorage.getItem('language') as string;

        const authReq = req.clone({
            headers: req.headers
            .append('x-rapidapi-key', '4f5a94ff17mshb05f7cb59d24962p1c3c2bjsn79b867c9abf4')
            
            .append('x-rapidapi-host', 'one-piece-episodes.p.rapidapi.com'),
            params: req.params.append('language', language)
        });

        return next.handle(authReq);
    }





}