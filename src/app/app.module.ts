import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ButtonComponent } from "./components/button/button.component";
import { AccordionComponent } from "./components/accordion/accordion.component";
import { IconComponent } from "./components/icon/icon.component";
import { AccordionCardComponent } from "./components/accordion-card/accordion-card.component";
import { SectionCollapsableComponent } from "./components/section-collapsable/section-collapsable.component";
import { PillComponent } from "./placeholder/pill/pill.component";
import { LinkIconComponent } from "./placeholder/link-icon/link-icon.component";
import { WorkflowCardComponent } from "./components/workflow-card/workflow-card.component";
import { WorkflowComponent } from "./components/workflow/workflow.component";
import { PillHolderCollapsableComponent } from "./components/pill-holder-collapsable/pill-holder-collapsable.component";
import { CardComponent } from "./components/card/card.component";

import { FooterComponent } from "./components/footer/footer.component";
import { PagefeedbackComponent } from "./components/pagefeedback/pagefeedback.component";
import { MastheadComponent } from "./components/masthead/masthead.component";
import { ButtonBigIconComponent } from "./components/button-big-icon/button-big-icon.component";
import { WorkflowTaskComponent } from "./components/workflow-task/workflow-task.component";
import { TagComponent } from "./components/tag/tag.component";
import { NotificationsComponent } from "./components/notifications/notifications.component";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { ModalComponent } from "./components/modal/modal.component";
import { InputTextComponent } from "./placeholder/input-text/input-text.component";
import { NavVerticalComponent } from "./components/nav-vertical/nav-vertical.component";
import { TabsItemComponent } from "./placeholder/tabs-item/tabs-item.component";
import { TabsComponent } from "./placeholder/tabs/tabs.component";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";
import { LibraryLoginComponent } from "./placeholder/library-login/library-login.component";
import { UserResolver } from "./core/user.resolver";
import { AuthGuard } from "./core/auth.guard";
import { AuthService } from "./core/auth.service";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { GridComponent } from "./placeholder/grid/grid.component";
import { LibraryComponentsComponent } from "./placeholder/library-components/library-components.component";
import { LibraryHelpersComponent } from "./placeholder/library-helpers/library-helpers.component";
import { LibraryGlobalsComponent } from "./placeholder/library-globals/library-globals.component";
import { TooltipComponent } from "./placeholder/tooltip/tooltip.component";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    AccordionComponent,
    IconComponent,
    AccordionCardComponent,
    SectionCollapsableComponent,
    PillComponent,
    LinkIconComponent,
    WorkflowCardComponent,
    WorkflowComponent,
    PillHolderCollapsableComponent,
    CardComponent,
    FooterComponent,
    PagefeedbackComponent,
    MastheadComponent,
    ButtonBigIconComponent,
    WorkflowTaskComponent,
    TagComponent,
    NotificationsComponent,
    BreadcrumbComponent,
    ModalComponent,
    InputTextComponent,
    NavVerticalComponent,
    TabsItemComponent,
    TabsComponent,
    GridComponent,
    LibraryComponentsComponent,
    LibraryHelpersComponent,
    LibraryGlobalsComponent,
    LibraryLoginComponent,
    TooltipComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [AuthService, UserResolver, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
