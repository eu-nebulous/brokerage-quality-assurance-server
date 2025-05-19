package org.seerc.nebulous.bqa.rest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class BQAServeUI {
	@GetMapping({"/ui"})
	public String greeting(@RequestParam(name="appId", required = true) String applicationId, @RequestParam(name="nonce", required = true) String nonce ) {
		return "index";
	}
}
