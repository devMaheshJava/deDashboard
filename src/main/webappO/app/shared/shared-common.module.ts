import { NgModule } from '@angular/core';

import { DeDashboardSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [DeDashboardSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [DeDashboardSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DeDashboardSharedCommonModule {}
