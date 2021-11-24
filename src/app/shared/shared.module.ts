import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './components/image/image.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { SimpleHeadingComponent } from './components/simple-heading/simple-heading.component';
import { ChapterTitleComponent } from './components/chapter-title/chapter-title.component';
import { VideoComponent } from './components/video/video.component';
import { ExpandableContentComponent } from './components/expandable-content/expandable-content.component';
import { TwitterComponent } from './components/twitter/twitter.component';
import { LogoHeadingComponent } from './components/logo-heading/logo-heading.component';
import { CounterComponent } from './components/counter/counter.component';
import { QuoteComponent } from './components/quote/quote.component';
import { ShadeKnowledgeComponent } from './components/shade-knowledge/shade-knowledge.component';
import { CaptionComponent } from './components/caption/caption.component';
import { ButtonComponent } from './components/button/button.component';
import { RegionTitleComponent } from './components/region-title/region-title.component';
import { RegionCounterComponent } from './components/region-counter/region-counter.component';
import { SignatureComponent } from './components/signature/signature.component';
import { ChartsComponent } from './components/charts/charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';
import { HorizontalGraphChartComponent } from './components/horizontal-graph-chart/horizontal-graph-chart.component';
import { RegionHeadingComponent } from './components/region-heading/region-heading.component';
import { CurrencyCounterComponent } from './components/currency-counter/currency-counter.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { AppendixesListComponent } from './components/appendixes-list/appendixes-list.component';
import { SingleHeadingComponent } from './components/single-heading/single-heading.component';
import {RouterModule} from '@angular/router';
import { ExpandableContentTwoComponent } from './components/expandable-content-two/expandable-content-two.component';
import { ShadeKnowledgeTwoComponent } from './components/shade-knowledge-two/shade-knowledge-two.component';


@NgModule({
  declarations: [
    
    ImageComponent,
    ParagraphComponent,
    SimpleHeadingComponent,
    ChapterTitleComponent,
    VideoComponent,
    ExpandableContentComponent,
    TwitterComponent,
    LogoHeadingComponent,
    CounterComponent,
    QuoteComponent,
    ShadeKnowledgeComponent,
    CaptionComponent,
    ButtonComponent,
    ExpandableContentTwoComponent,
    ShadeKnowledgeTwoComponent,
    RegionTitleComponent,
    RegionCounterComponent,
    SignatureComponent,
    CurrencyCounterComponent,
    ChartsComponent,
    HorizontalGraphChartComponent,
    RegionHeadingComponent,
    MenuBarComponent,
    AppendixesListComponent,
    SingleHeadingComponent  
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    ChartAllModule,
    AccumulationChartAllModule,
    RangeNavigatorAllModule,
    RouterModule
  ],
  exports:[    
    ImageComponent,
    ParagraphComponent,
    SimpleHeadingComponent,
    ChapterTitleComponent,
    VideoComponent,
    ExpandableContentComponent,
    TwitterComponent,
    LogoHeadingComponent,
    CounterComponent,
    QuoteComponent,
    ShadeKnowledgeComponent,
    CaptionComponent,
    ButtonComponent,
    ExpandableContentTwoComponent,
    ShadeKnowledgeTwoComponent,
    RegionTitleComponent,
    RegionCounterComponent,
    SignatureComponent,
    CurrencyCounterComponent,
    ChartsComponent,
    HorizontalGraphChartComponent,
    RegionHeadingComponent,
    MenuBarComponent,
    SingleHeadingComponent,
    

  ]
})
export class SharedModule { }
