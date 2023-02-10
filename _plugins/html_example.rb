module Jekyll
  class HtmlExampleTagBlock < Liquid::Block

    def render(context)
      text = CGI.escapeHTML(super)
      "<pre>#{text}</pre"
    end

  end
end

Liquid::Template.register_tag('html_example', Jekyll::HtmlExampleTagBlock)
