/*! grafana - v2.6.0 - 2015-12-14
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["require","exports","test/specs/helpers","test/lib/common","moment","angular","../datasource"],function(a,b,c,d,e,f){d.describe("ElasticDatasource",function(){var a=new c.ServiceTestContext;d.beforeEach(d.angularMocks.module("grafana.core")),d.beforeEach(d.angularMocks.module("grafana.services")),d.beforeEach(a.providePhase(["templateSrv","backendSrv"])),d.beforeEach(a.createService("ElasticDatasource")),d.beforeEach(function(){a.ds=new a.service({jsonData:{}})}),d.describe("When testing datasource with index pattern",function(){d.beforeEach(function(){a.ds=new a.service({url:"http://es.com",index:"[asd-]YYYY.MM.DD",jsonData:{interval:"Daily"}})}),d.it("should translate index pattern to current day",function(){var b;a.backendSrv.datasourceRequest=function(c){return b=c,a.$q.when({})},a.ds.testDatasource(),a.$rootScope.$apply();var c=e.utc().format("YYYY.MM.DD");d.expect(b.url).to.be("http://es.com/asd-"+c+"/_stats")})}),d.describe("When issueing metric query with interval pattern",function(){var b,c,g;d.beforeEach(function(){a.ds=new a.service({url:"http://es.com",index:"[asd-]YYYY.MM.DD",jsonData:{interval:"Daily"}}),a.backendSrv.datasourceRequest=function(c){return b=c,a.$q.when({data:{responses:[]}})},a.ds.query({range:{from:e([2015,4,30,10]),to:e([2015,5,1,10])},targets:[{bucketAggs:[],metrics:[],query:"escape\\:test"}]}),a.$rootScope.$apply(),c=b.data.split("\n"),g=f.fromJson(c[0])}),d.it("should translate index pattern to current day",function(){d.expect(g.index).to.eql(["asd-2015.05.30","asd-2015.05.31","asd-2015.06.01"])}),d.it("should json escape lucene query",function(){var a=f.fromJson(c[1]);d.expect(a.query.filtered.query.query_string.query).to.be("escape\\:test")})}),d.describe("When issueing document query",function(){var b,c,g;d.beforeEach(function(){a.ds=new a.service({url:"http://es.com",index:"test",jsonData:{}}),a.backendSrv.datasourceRequest=function(c){return b=c,a.$q.when({data:{responses:[]}})},a.ds.query({range:{from:e([2015,4,30,10]),to:e([2015,5,1,10])},targets:[{bucketAggs:[],metrics:[{type:"raw_document"}],query:"test"}]}),a.$rootScope.$apply(),c=b.data.split("\n"),g=f.fromJson(c[0])}),d.it("should set search type to query_then_fetch",function(){d.expect(g.search_type).to.eql("query_then_fetch")}),d.it("should set size",function(){var a=f.fromJson(c[1]);d.expect(a.size).to.be(500)})})})});