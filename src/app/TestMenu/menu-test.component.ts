import { Component, OnInit } from '@angular/core';
import { Menu } from '../theme/components/menu/menu.model';
import { DynamicMenuService } from '../pages/dynamic-menu/dynamic-menu.service';
import { VerticalMenuComponent } from '../theme/components/menu/vertical-menu/vertical-menu.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';
import { MenuService } from '../theme/components/menu/menu.service';
import { blockTransition } from '../theme/utils/app-animation';

@Component({
  selector: 'app-menu-test',
  templateUrl: './menu-test.component.html',
  providers: [ DynamicMenuService, MenuService ],
  animations: [ blockTransition ],
  host: {
    '[@blockTransition]': ''
  }
})
export class MenuTestComponent implements OnInit {
  public menuItems:Array<Menu>;
  public settings: Settings;
  constructor( private dynamicMenuService:DynamicMenuService,
               public snackBar: MatSnackBar,
               private menuService:MenuService, 
               public appSettings:AppSettings, 
     ) {
      this.settings = this.appSettings.settings; 
      this.menuItems = this.menuService.getVerticalMenuItems();
      console.log("list",this.menuItems);
      }

  ngOnInit(): void {
  }
  Envoie():void {
      //console.log("submittttttttttt");
      var menu=new Menu(76, 'Menu_Administration', '/', null, 'settings_applications', null, true, 0);
      console.log(menu);
      this.dynamicMenuService.addNewMenuItem(VerticalMenuComponent, this.menuItems, menu);
      console.log("list",this.menuItems);
      this.snackBar.open('New menu item added successfully!', null, {
        duration: 2000,
      });
  }
  
}
