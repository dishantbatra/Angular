/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../app/store/cartsummary.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/model/cart.model';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import11 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import12 from '@angular/common/src/pipes/number_pipe';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/router/src/router';
import * as import15 from '@angular/router/src/router_state';
import * as import16 from '@angular/common/src/location/location_strategy';
import * as import17 from '@angular/core/src/i18n/tokens';
import * as import18 from '@angular/common/src/directives/ng_if';
import * as import19 from '@angular/router/src/directives/router_link';
export var Wrapper_CartSummaryComponent = (function () {
    function Wrapper_CartSummaryComponent(p0) {
        this._changed = false;
        this.context = new import0.CartSummaryComponent(p0);
    }
    Wrapper_CartSummaryComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_CartSummaryComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_CartSummaryComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_CartSummaryComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_CartSummaryComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_CartSummaryComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_CartSummaryComponent;
}());
var renderType_CartSummaryComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_CartSummaryComponent_Host0 = (function (_super) {
    __extends(View_CartSummaryComponent_Host0, _super);
    function View_CartSummaryComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_CartSummaryComponent_Host0, renderType_CartSummaryComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_CartSummaryComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'cart-summary', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_CartSummaryComponent0(this.viewUtils, this, 0, this._el_0);
        this._CartSummaryComponent_0_3 = new Wrapper_CartSummaryComponent(this.injectorGet(import8.Cart, this.parentIndex));
        this.compView_0.create(this._CartSummaryComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._CartSummaryComponent_0_3.context);
    };
    View_CartSummaryComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.CartSummaryComponent) && (0 === requestNodeIndex))) {
            return this._CartSummaryComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_CartSummaryComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._CartSummaryComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_CartSummaryComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_CartSummaryComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_CartSummaryComponent_Host0;
}(import1.AppView));
export var CartSummaryComponentNgFactory = new import7.ComponentFactory('cart-summary', View_CartSummaryComponent_Host0, import0.CartSummaryComponent);
var styles_CartSummaryComponent = [];
var renderType_CartSummaryComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_CartSummaryComponent, {});
export var View_CartSummaryComponent0 = (function (_super) {
    __extends(View_CartSummaryComponent0, _super);
    function View_CartSummaryComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_CartSummaryComponent0, renderType_CartSummaryComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._expr_22 = import6.UNINITIALIZED;
    }
    View_CartSummaryComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'pull-xs-right'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'small', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        Your cart:\n        ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._vc_4 = new import9.ViewContainer(4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new import13.TemplateRef_(this, 4, this._anchor_4);
        this._NgIf_4_6 = new import10.Wrapper_NgIf(this._vc_4.vcRef, this._TemplateRef_4_5);
        this._text_5 = this.renderer.createText(this._el_2, '\n        ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._vc_6 = new import9.ViewContainer(6, 2, this, this._anchor_6);
        this._TemplateRef_6_5 = new import13.TemplateRef_(this, 6, this._anchor_6);
        this._NgIf_6_6 = new import10.Wrapper_NgIf(this._vc_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_8 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_0, 'button', new import3.InlineArray4(4, 'class', 'btn btn-sm bg-inverse', 'routerLink', '/cart'), null);
        this._RouterLink_9_3 = new import11.Wrapper_RouterLink(this.parentView.injectorGet(import14.Router, this.parentIndex), this.parentView.injectorGet(import15.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import16.LocationStrategy, this.parentIndex));
        this._text_10 = this.renderer.createText(this._el_9, '\n        ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_9, 'i', new import3.InlineArray2(2, 'class', 'fa fa-shopping-cart'), null);
        this._text_12 = this.renderer.createText(this._el_9, '\n    ', null);
        this._text_13 = this.renderer.createText(this._el_0, '\n', null);
        this._pipe_currency_0 = new import12.CurrencyPipe(this.parentView.injectorGet(import17.LOCALE_ID, this.parentIndex));
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_9, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_9));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13
        ]), [disposable_0]);
        return null;
    };
    View_CartSummaryComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import18.NgIf) && (4 === requestNodeIndex))) {
            return this._NgIf_4_6.context;
        }
        if (((token === import13.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import18.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        if (((token === import19.RouterLink) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._RouterLink_9_3.context;
        }
        return notFoundResult;
    };
    View_CartSummaryComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4_0_0 = (this.context.cart.itemCount > 0);
        this._NgIf_4_6.check_ngIf(currVal_4_0_0, throwOnChange, false);
        this._NgIf_4_6.ngDoCheck(this, this._anchor_4, throwOnChange);
        var currVal_6_0_0 = (this.context.cart.itemCount == 0);
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        var currVal_9_0_0 = '/cart';
        this._RouterLink_9_3.check_routerLink(currVal_9_0_0, throwOnChange, false);
        this._RouterLink_9_3.ngDoCheck(this, this._el_9, throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        var currVal_22 = (this.context.cart.itemCount == 0);
        if (import3.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setElementProperty(this._el_9, 'disabled', currVal_22);
            this._expr_22 = currVal_22;
        }
    };
    View_CartSummaryComponent0.prototype.destroyInternal = function () {
        this._vc_4.destroyNestedViews();
        this._vc_6.destroyNestedViews();
    };
    View_CartSummaryComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 4)) {
            return new View_CartSummaryComponent1(this.viewUtils, this, 4, this._anchor_4, this._vc_4);
        }
        if ((nodeIndex == 6)) {
            return new View_CartSummaryComponent2(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        return null;
    };
    View_CartSummaryComponent0.prototype.handleEvent_9 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLink_9_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_CartSummaryComponent0;
}(import1.AppView));
var View_CartSummaryComponent1 = (function (_super) {
    __extends(View_CartSummaryComponent1, _super);
    function View_CartSummaryComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_CartSummaryComponent1, renderType_CartSummaryComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import6.UNINITIALIZED;
    }
    View_CartSummaryComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._pipe_currency_0_0 = import3.pureProxy4(this.parentView._pipe_currency_0.transform.bind(this.parentView._pipe_currency_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_CartSummaryComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import6.ValueUnwrapper();
        valUnwrapper.reset();
        var currVal_2 = import3.inlineInterpolate(2, '\n            ', this.parentView.context.cart.itemCount, ' item(s) ', valUnwrapper.unwrap(import3.castByValue(this._pipe_currency_0_0, this.parentView._pipe_currency_0.transform)(this.parentView.context.cart.cartPrice, 'USD', true, '2.2-2')), '\n        ');
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_2, currVal_2))) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_CartSummaryComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_CartSummaryComponent1;
}(import1.AppView));
var View_CartSummaryComponent2 = (function (_super) {
    __extends(View_CartSummaryComponent2, _super);
    function View_CartSummaryComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_CartSummaryComponent2, renderType_CartSummaryComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_CartSummaryComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            (empty)\n        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_CartSummaryComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_CartSummaryComponent2;
}(import1.AppView));
