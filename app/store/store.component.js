import { Component } from "@angular/core";
import { ProductRepository } from "../model/product.repository";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";
export var StoreComponent = (function () {
    function StoreComponent(repository, cart, router) {
        this.repository = repository;
        this.cart = cart;
        this.router = router;
        this.selectedCategory = null;
        this.productsPerPage = 4;
        this.selectedPage = 1;
    }
    Object.defineProperty(StoreComponent.prototype, "products", {
        get: function () {
            var pageIndex = (this.selectedPage - 1) * this.productsPerPage;
            debugger;
            return this.repository
                .getProducts(this.selectedCategory)
                .slice(pageIndex, pageIndex + this.productsPerPage);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreComponent.prototype, "categories", {
        get: function () {
            return this.repository.getCategories();
        },
        enumerable: true,
        configurable: true
    });
    StoreComponent.prototype.changeCategory = function (newCategory) {
        this.selectedCategory = newCategory;
    };
    StoreComponent.prototype.changePage = function (newPage) {
        debugger;
        this.selectedPage = newPage;
    };
    StoreComponent.prototype.changePageSize = function (newSize) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    };
    Object.defineProperty(StoreComponent.prototype, "pageNumbers", {
        get: function () {
            return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length /
                this.productsPerPage))
                .fill(0)
                .map(function (x, i) { return i + 1; });
        },
        enumerable: true,
        configurable: true
    });
    StoreComponent.prototype.addProductToCart = function (product) {
        this.cart.addLine(product);
        this.router.navigateByUrl("/cart");
    };
    StoreComponent.decorators = [
        { type: Component, args: [{
                    selector: "store",
                    moduleId: module.id,
                    templateUrl: "store.component.html"
                },] },
    ];
    /** @nocollapse */
    StoreComponent.ctorParameters = [
        { type: ProductRepository, },
        { type: Cart, },
        { type: Router, },
    ];
    return StoreComponent;
}());
