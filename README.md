# angular-html-generator

angularJS HTML generator directive

using json to generate html

example: js file
<pre>
angular.module("app").controller("ViewController", 
	/*@ngInject*/ function($scope) {
		
		var ctrl = this;
		ctrl.config = {
			tag: "div",
			attr: {
				class: 'wrapper'
			},
			inner: [
				{
					tag: 'div',
					attr: {
						class: 'container',
					},
					inner: [
						{
							tag: 'div',
							attr: {
								class: 'page-header clearfix',
							},
							inner: [
								{
									tag: 'h1',
									attr: {
										innerHtml: 'This is header'
									}
								}
							]
						}
					]
				},
				{
					tag: 'div',
					attr: {
						class: 'container'
					},
					inner: [
						{
							tag: 'form',
							attr: {
								class: 'form-horizontal'
							},
							inner: [
								{
									tag: 'div',
									attr: {
										class: 'form-group'
									},
									inner: [
										{
											attr: {
												class: 'control-label col-xs-4',
											},
											tag: 'label',
											innerHtml: 'Label Text'
										},
										{
											attr: {
												class: 'col-xs-4',
											},
											tag: 'div',
											inner: [
												{
													attr: {
														class: 'form-control',
													},
													tag: 'input',
												}
											]
										}
									]
								},
								{
									tag: 'div',
									attr: {
										class: 'form-group'
									},
									inner: [
										{
											attr: {
												class: 'control-label col-xs-4',
											},
											tag: 'label',
											innerHtml: 'Label Text'
										},
										{
											attr: {
												class: 'col-xs-4',
											},
											tag: 'div',
											inner: [
												{
													attr: {
														class: 'form-control',
													},
													tag: 'input',
												}
											]
										}
									]
								}
							]
						}
					]
				},
			]
		};
	}
);
</pre>

html file
<pre>
&lt;body ng-controller="ViewController as viewCtrl"&gt;
  &lt;html-generator config="viewCtrl.config"&gt;&lt;/html-generator&gt;
&lt;/body&gt;
</pre>
