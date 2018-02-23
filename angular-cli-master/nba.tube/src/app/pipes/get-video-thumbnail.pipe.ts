import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getVideoThumbnail'
})
export class GetVideoThumbnailPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if(value.indexOf("=")>0){
      return "https://img.youtube.com/vi/" +value.substr(value.indexOf("=") + 1) + "/0.jpg"
    }else{
      return "https://img.youtube.com/vi/" + value.substr(value.lastIndexOf("/") + 1) + "/0.jpg"
    }
  }

}
